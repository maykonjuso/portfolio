import { ChevronRight } from "lucide-react";
import Image from "next/image";
import photo from "public/photo.png";

export default function Home() {
  return (
    <div className="h-screen flex flex-row items-center justify-center mx-48">
      <div className="flex flex-col justify-center w-full gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-white-100 font-bold text-6xl">Olá! me chamo</h2>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 font-bold text-6xl">
            Maykon Júnio
          </h2>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-white-100 font-bold text-4xl">
            Sou Data Scientist e Developer
          </h3>
          <h3 className="text-white-100 font-medium text-4xl">
            Seja bem-vind@ ao meu Portfólio
          </h3>
        </div>
        <button className="px-6 py-1 border border-white-10 bg-white-10 rounded-xl text-sm cursor-pointer hover:bg-slate-200 flex flex-row max-w-fit gap-2 items-center">
          <span className="text-sky-500 font-bold text-4xl">•</span>
          <span className="text-white-100 font-bold text-xl">
            Projetos recentes
          </span>
          <ChevronRight className="text-white-100 font-bold text-xl" />
        </button>
      </div>
      <Image priority src={photo} alt="Maykon" />
    </div>
  );
}
