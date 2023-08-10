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
              Em um ambiente desafiador com uma equipe composta por cerca de{' '}
              <b>30 pessoas</b>, fui encarregado de abordar questões complexas
              nos setores de <b>compras, almoxarifado e patrimônio</b>. O
              principal obstáculo residia na resolução de problemas legados de
              gestões anteriores. Para enfrentar essa situação, conduzi uma
              investigação detalhada que abrangeu uma década de dados, aplicando
              minuciosa análise de erros por meio da ciência de dados, usando
              <b> Python e R</b>. Ao aplicar essa abordagem, pude revolucionar o
              sistema de gestão de patrimônio, previamente problemático,
              resultando em um sistema altamente eficiente que recebeu elogios
              tanto interna quanto externamente. A principal lição extraída
              dessa experiência foi a importância da <b>inovação</b> na
              resolução de problemas, com a utilização de ferramentas
              tecnológicas não convencionais para alcançar resultados notáveis
              em áreas antes não exploradas dessa maneira.
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
              Trabalhando em estreita colaboração com uma equipe de
              aproximadamente <b>10 integrantes,</b> dediquei-me a resolver
              desafios em projetos destinados a empresas que contratavam nossos
              serviços. Confrontei questões relacionadas ao baixo desempenho
              empresarial devido a estruturação inadequada, e minha abordagem
              envolveu a aplicação de <b>gamificação como solução</b>.
              Desenvolvi soluções gamificadas para aprimorar o desempenho,
              conduzindo consultorias e criando softwares baseados nesses
              conceitos. Como resultado, as empresas contratantes puderam adotar
              novos modelos e implementar mudanças significativas. Essa
              experiência me proporcionou uma lição valiosa sobre a importância
              de compreender além das habilidades técnicas, aprendendo a
              identificar os <b>contextos específicos</b> das situações para
              oferecer soluções mais eficazes e adaptadas.
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
