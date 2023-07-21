import logo from 'public/logo.svg'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="absolute flex w-full flex-row items-center justify-between border-b border-white-10 bg-black-50 px-48 py-4 backdrop-blur-sm ">
      <div className="flex flex-row items-center gap-3">
        <Image priority src={logo} alt="Logo site - Maykon" />
        <h1 className="font-semibold text-white-100">Portólio</h1>
      </div>
      <ul className="flex flex-row gap-8">
        <li className="cursor-pointer font-semibold text-white-100 hover:text-slate-200">
          Sobre
        </li>
        <li className="cursor-pointer font-semibold text-white-100 hover:text-slate-200">
          Projetos
        </li>
        <li className="cursor-pointer font-semibold text-white-100 hover:text-slate-200">
          Experiência
        </li>
        <li className="cursor-pointer font-semibold text-white-100 hover:text-slate-200">
          Formação
        </li>
      </ul>
      <button className="rounded-xl bg-white-100 px-6 py-2 text-sm hover:bg-slate-200">
        <span className="font-semibold text-black-100">contato</span>
      </button>
    </header>
  )
}
