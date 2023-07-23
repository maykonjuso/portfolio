import logo from 'public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed flex h-16 w-full flex-row items-center justify-between border-b border-white-10 bg-black-50/10 px-48 backdrop-blur-sm">
      <Link href={'/'}>
        <div className="flex flex-row items-center gap-3">
          <Image priority src={logo} alt="Logo Maykon" />
          <h1 className="font-semibold text-white-100">Portfólio</h1>
        </div>
      </Link>
      <nav className="flex flex-row gap-8">
        <Link
          href={'/about'}
          className="cursor-pointer font-semibold text-white-100 duration-200 hover:text-slate-300"
        >
          Sobre
        </Link>
        <Link
          href={'/projects'}
          className="cursor-pointer font-semibold text-white-100 duration-200 hover:text-slate-300"
        >
          Projetos
        </Link>
        <Link
          href={'experience'}
          className="cursor-pointer font-semibold text-white-100 duration-200 hover:text-slate-300"
        >
          Experiência
        </Link>
        <Link
          href={'/education'}
          className="cursor-pointer font-semibold text-white-100 duration-200 hover:text-slate-300"
        >
          Formação
        </Link>
      </nav>
      <button className="rounded-xl bg-white-100 px-6 py-2 text-sm duration-200 hover:bg-slate-200">
        <span className="font-semibold text-black-100">contato</span>
      </button>
    </header>
  )
}
