"use client";

import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import DropzoneComponent from "react-dropzone";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export function Dropzone() {
  const [loading, setLoading] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();

  //max size 20MB
  const maxSize = 20971520;

  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("Leitura de arquivo abortada");
      reader.onerror = () => console.log("Erro na leitura de arquivo");

      reader.onload = async () => {
        await uploadPost(file);
      };

      reader.readAsArrayBuffer(file);
    });
  };

  const uploadPost = async (selectedFile: File) => {
    if (loading) return;
    if (!user) return;

    setLoading(true);

    //addDoc to route users/user12345/files
    const docRef = await addDoc(collection(db, "users", user.id, "files"), {
      userId: user.id,
      filename: selectedFile.name,
      fullName: user.fullName,
      profileImg: user.imageUrl,
      timestamp: serverTimestamp(),
      type: selectedFile.type,
      size: selectedFile.size,
    });

    //get img reference from the document in database
    const imgRef = ref(storage, `users/${user.id}/files/${docRef.id}`);

    //upload img reference
    uploadBytes(imgRef, selectedFile).then(async (snapshot) => {
      const downloadURL = await getDownloadURL(imgRef);

      await updateDoc(doc(db, "users", user.id, "files", docRef.id), {
        downloadURL,
      });
    });

    setLoading(false);
  };

  return (
    <DropzoneComponent minSize={0} maxSize={maxSize} onDrop={onDrop}>
      {({
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
        fileRejections,
      }) => {
        const isFileTooLarge =
          fileRejections.length > 0 && fileRejections[0].file.size > maxSize;

        return (
          <section className="m-4">
            <div
              {...getRootProps()}
              className={cn(
                "w-full h-52 flex justify-center items-center p-5 border-2 border-dashed rounded-lg text-center",
                isDragActive
                  ? "bg-[#035FFE] text-white animate-pulse"
                  : "bg-slate-100/50 dark:bg-slate-800/80 text-slate-400"
              )}
            >
              <input {...getInputProps()} />
              {!isDragActive &&
                "Clique aqui ou solte um arquivo para fazer upload!"}
              {isDragActive &&
                !isDragReject &&
                "Solte aqui para fazer upload deste arquivo!"}
              {isDragReject && "Tipo de arquivo não suportado, desculpe :("}
              {isFileTooLarge && (
                <div className="text-danger mt-2">
                  Arquivo excede o tamanho permitido.
                </div>
              )}
            </div>
          </section>
        );
      }}
    </DropzoneComponent>
  );
}
