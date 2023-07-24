import { PageWrapper } from '../page-wrapper'
import Footer from '../components/footer'
import fms from 'public/fms.png'
import Image from 'next/image'
import Tools from './components/tools'

export default function projects() {
  return (
    <PageWrapper>
      <div className="flex min-h-screen flex-col gap-20 px-48 py-24 max-lg:px-10">
        <div className="flex justify-between gap-16 max-lg:w-full max-lg:flex-col max-lg:gap-8">
          <div className="w-1/3 max-lg:w-full">
            <Image priority src={fms} alt="family music school" />
          </div>
          <div className="flex w-2/3 flex-col gap-5 max-lg:w-full">
            <h2 className="bg-gradient-to-r from-cyan-500 to-white-100 bg-clip-text text-4xl font-bold text-transparent max-lg:w-full">
              Family Music School
            </h2>
            <p className="text-justify">
              O projeto &quot;Family Music System&quot; está em desenvolvimento
              pela equipe &quot;FMS&quot; durante a disciplina &quot;Métodos de
              Desenvolvimento de Software&quot; no semestre 2023/1 da
              Universidade Federal de Brasília. O propósito do projeto consiste
              em criar uma aplicação web para gerenciar a escola de música
              &quot;Family Music School&quot;.
            </p>
            <Tools
              tools={['Angular', 'Strapi', 'SQLite', 'Bootstrap', 'Jest']}
            />
          </div>
        </div>
      </div>
      <Footer />
    </PageWrapper>
  )
}
