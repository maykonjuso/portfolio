import logo from "../../../../../public/logo.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute flex w-full flex-row justify-between px-48 py-4 bg-black-50 items-center border-b border-white-10 backdrop-blur-sm ">
      <div className="flex flex-row gap-3 items-center">
        <Image priority src={logo} alt="Logo site - Maykon" />
        <h1 className="text-white-100 font-semibold">Portólio</h1>
      </div>
      <ul className="flex flex-row gap-8">
        <li className="text-white-100 font-semibold hover:text-slate-200 cursor-pointer">
          Sobre
        </li>
        <li className="text-white-100 font-semibold hover:text-slate-200 cursor-pointer">
          Projetos
        </li>
        <li className="text-white-100 font-semibold hover:text-slate-200 cursor-pointer">
          Experiência
        </li>
        <li className="text-white-100 font-semibold hover:text-slate-200 cursor-pointer">
          Formação
        </li>
      </ul>
      <button className="px-6 py-2 bg-white-100 rounded-xl text-sm hover:bg-slate-200">
        <span className="text-black-100 font-semibold">contato</span>
      </button>
    </header>
  );
}
