import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import photo from 'public/photo.png'
import { PageWrapper } from './page-wrapper'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="mx-48 flex h-screen flex-row items-center justify-center overflow-hidden max-sm:mx-10">
      <PageWrapper>
        <div className="flex w-full flex-col items-center justify-center gap-5">
          <Image priority src={photo} alt="Maykon" width={200} />
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-5xl font-bold text-white-100 max-sm:text-4xl">
              Maykon Júnio
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold text-white-100/90">
              Data engineer
            </h3>
            <h3 className="text-lg font-normal text-white-100/90">
              Seja bem-vind@ ao meu Portfólio
            </h3>
          </div>
          <Link href={'/projects'}>
            <button className="flex max-w-fit flex-row items-center gap-2 rounded-full border border-white-10 bg-white-10 px-3 duration-200 hover:opacity-90">
              <span className="text-xl font-bold text-sky-500">•</span>
              <span className="text-sm font-medium text-white-100">
                Confira meus projetos recentes
              </span>
              <ChevronRight size={16} strokeWidth={2.5} color="#f9f9f9" />
            </button>
          </Link>
        </div>
      </PageWrapper>
    </div>
  )
}
