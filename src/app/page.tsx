import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import photo from 'public/photo.png'

export default function Home() {
  return (
    <div className="mx-48 flex h-screen flex-row items-center justify-center">
      <div className="flex w-full flex-col justify-center gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-6xl font-bold text-white-100">Olá! me chamo</h2>
          <h2 className="bg-gradient-to-r from-sky-700 to-cyan-200 bg-clip-text text-8xl font-bold text-transparent">
            Maykon Júnio
          </h2>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-4xl font-bold text-white-100">
            Sou Data Scientist e Developer
          </h3>
          <h3 className="text-4xl font-medium text-white-100">
            Seja bem-vind@ ao meu Portfólio
          </h3>
        </div>
        <button className="flex max-w-fit flex-row items-center gap-2 rounded-xl border border-white-10 bg-white-10 px-6 py-1 hover:opacity-80">
          <span className="text-2xl font-bold text-sky-500">•</span>
          <span className="text-base font-semibold text-white-100">
            Projetos recentes
          </span>
          <ChevronRight className="text-xl font-bold text-white-100" />
        </button>
      </div>
      <Image priority src={photo} alt="Maykon" />
    </div>
  )
}
