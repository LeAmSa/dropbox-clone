import { ArrowRightIcon, MoveRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <div className="p-10 flex flex-col gap-5 bg-[#2B2929] dark:bg-slate-800 text-white">
          <h1 className="text-5xl font-bold">
            Bem-vindo ao Dropclone.
            <br />
            <br />
            Tudo que você precisa armazenar, de maneira prática e em um só
            lugar!
          </h1>

          <p className="pb-20">
            Mantenha a colaboração fluindo e entregue seus projetos com
            agilidade usando o Dropclone. Armazene seus arquivos, edite
            documentos, compartilhe vídeos e monitore a interação com seus
            conteúdos - tudo diretamente no Dropclone.
          </p>

          <Link
            href="/dashboard"
            className="w-fit flex items-center gap-6 bg-[#0866FF] hover:bg-[#0652CC] text-white font-bold py-4 px-6 rounded group"
          >
            Começar
            <MoveRightIcon className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Add some free video demo */}
        {/* <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
          video
        </div> */}
      </div>

      <div className="max-w-7xl mx-auto">
        <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
        <p className="text-center text-sm font-light p-2 italic">
          **Este projeto é um clone parcial da interface do usuário (UI) do
          Dropbox, apresentando um design exclusivo de interação de arrastar e
          soltar para fins educacionais. Ele não copia diretamente a
          funcionalidade ou código protegido por direitos autorais do Dropbox
          relacionados ao upload de arquivos ou armazenamento de dados. Não
          reivindico propriedade ou afiliação com o Dropbox ou qualquer uma de
          suas subsidiárias.**
        </p>

        <p className="text-center text-sm font-light p-2 italic">
          **This project is a partial user interface (UI) clone of Dropbox,
          featuring a unique drag-and-drop interaction design for educational
          purposes. It does not directly copy Dropbox's copyrighted
          functionality or code related to file upload or data storage. I do not
          claim ownership of or affiliation with Dropbox or any of its
          subsidiaries.**
        </p>
      </div>
    </main>
  );
}
