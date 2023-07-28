import { CalendarClock, MapPin } from 'lucide-react'
import Footer from '../components/footer'
import { PageWrapper } from '../page-wrapper'
import Tools from '../projects/components/tools'
import Image from 'next/image'
import Dpu from 'public/dpu.png'
import Orc from 'public/orc.png'

export default function experience() {
  return (
    <PageWrapper>
      <div className="flex min-h-screen flex-col gap-10 px-48 py-24 max-lg:gap-16 max-lg:px-6 lg:px-32 2xl:px-80">
        <div className="group/item flex justify-between gap-16 rounded-xl border border-transparent duration-200 max-lg:w-full max-lg:flex-col max-lg:gap-8 lg:px-6 lg:py-8 lg:hover:border-white-10 lg:hover:bg-slate-400/5">
          <div className="flex h-44 w-2/4 max-lg:w-full xl:w-96">
            <Image
              priority
              src={Dpu}
              alt="Defensoria Pública da União"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="flex w-2/3 flex-col gap-5 max-lg:w-full">
            <h2 className="bg-gradient-to-r from-cyan-500 to-white-100 bg-clip-text text-4xl font-bold text-transparent max-lg:w-full">
              Defensoria Pública da União
            </h2>

            <p className="text-justify">
              Levantamentos de dados de maneira automatizada com Selenium;
              Elaboração de planilhas automatizadas com VBA; Apresentação de
              relatórios em painéis de controle com Power BI.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <CalendarClock />
                <p>Janeiro de 2022 - atual</p>
              </div>
              <div className="flex gap-2">
                <MapPin />
                <span>Brasília, Distrito Federal, Brasil.</span>
              </div>
            </div>
            <Tools
              tools={['Python', 'VBA', 'R', 'Access', 'Power BI', 'SEI']}
            />
          </div>
        </div>
        <div className="group/item flex justify-between gap-16 rounded-xl border border-transparent duration-200 max-lg:w-full max-lg:flex-col max-lg:gap-8 lg:px-6 lg:py-8 lg:hover:border-white-10 lg:hover:bg-slate-400/5">
          <div className="flex h-44 w-2/4 max-lg:w-full xl:w-96">
            <Image
              priority
              src={Orc}
              alt="Defensoria Pública da União"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="flex w-2/3 flex-col gap-5 max-lg:w-full">
            <h2 className="bg-gradient-to-r from-cyan-500 to-white-100 bg-clip-text text-4xl font-bold text-transparent max-lg:w-full">
              Orc&apos;estra Gamificação
            </h2>

            <p className="text-justify">
              Elaboração de backlog do produto; Desenvolvimento Mobile com React
              Native e Expo; Idealização de soluções Gamificadas para empresas.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <CalendarClock />
                <p>Agosto de 2021 - Fevereiro de 2022</p>
              </div>
              <div className="flex gap-2">
                <MapPin />
                <span>Brasília, Distrito Federal, Brasil.</span>
              </div>
            </div>
            <Tools tools={['React Native', 'Node.JS', 'Expo', 'Docker']} />
          </div>
        </div>
      </div>
      <Footer />
    </PageWrapper>
  )
}
