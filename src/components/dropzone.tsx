"use client";

import DropzoneComponent from "react-dropzone";

export function Dropzone() {
  //max size 20MB
  const maxSize = 20971520;

  return (
    <DropzoneComponent
      minSize={0}
      maxSize={maxSize}
      onDrop={(acceptedFiles) => console.log(acceptedFiles)}
    >
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
          <section className="border border-white">
            <div {...getRootProps()}>
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
