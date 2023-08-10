import { PageWrapper } from '../page-wrapper'
import Footer from '../components/footer'
import fms from 'public/fms.png'
import twitter from 'public/twitter.png'
import Anac from 'public/anac.png'
import Cnh from 'public/cnh.png'
import Image from 'next/image'
import Tools from './components/tools'
import { ChevronRight } from 'lucide-react'

export default function projects() {
  return (
    <PageWrapper>
      <div className="flex min-h-screen flex-col gap-10 px-48 py-24 max-lg:gap-16 max-lg:px-6 lg:px-32 2xl:px-80">
        <div className="group/item flex justify-between gap-16 rounded-xl border border-transparent duration-200 max-lg:w-full max-lg:flex-col max-lg:gap-8 lg:px-6 lg:py-8 lg:hover:border-white-10 lg:hover:bg-slate-400/5">
          <div className="flex h-44 w-2/4 max-lg:w-full xl:w-96">
            <Image
              priority
              src={fms}
              alt="family music school"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="flex w-2/3 flex-col gap-5 max-lg:w-full">
            <a
              href="https://family-music-school.web.app/"
              target="_blank"
              className="group/edit flex cursor-pointer items-center gap-3"
            >
              <h2 className="bg-gradient-to-r from-cyan-500 to-white-100 bg-clip-text text-4xl font-bold text-transparent max-lg:w-full">
                Family Music School
              </h2>
              <div className="invisible transition group-hover/edit:translate-x-2 lg:group-hover/item:visible">
                <ChevronRight size={32} strokeWidth={2.75} color="#5FC2D9" />
              </div>
            </a>

            <p className="text-justify">
              O projeto <b>Family Music System</b> está foi desenvolvido pela
              equipe <b>FMS</b> durante a disciplina{' '}
              <b>Métodos de Desenvolvimento de Software</b> no semestre 2023/1
              da Universidade Federal de Brasília. O propósito do projeto
              consiste em criar uma aplicação web para gerenciar a escola de
              música <b>Family Music School</b>.
            </p>
            <Tools
              tools={['Angular', 'Strapi', 'SQLite', 'Bootstrap', 'Jest']}
              rep="https://github.com/maykonjuso/2023.1-FamilyMusicSystem"
            />
          </div>
        </div>
        <div className="group/item flex justify-between gap-16 rounded-xl border border-transparent duration-200 max-lg:w-full max-lg:flex-col max-lg:gap-8 lg:px-6 lg:py-8 lg:hover:border-white-10 lg:hover:bg-slate-400/5">
          <div className="h-44 w-2/4 rounded-sm max-lg:w-full xl:w-96">
            <Image
              priority
              src={twitter}
              alt="Amicis"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="flex w-2/3 flex-col gap-5 max-lg:w-full ">
            <a
              href="https://github.com/maykonjuso/2022.2-Amicis"
              target="_blank"
              className="group/edit flex cursor-pointer items-center gap-3"
            >
              <h2 className="bg-gradient-to-r from-cyan-500 to-white-100 bg-clip-text text-4xl font-bold text-transparent max-lg:w-full">
                Amicis
              </h2>
              <div className="invisible transition group-hover/edit:translate-x-2 lg:group-hover/item:visible">
                <ChevronRight size={32} strokeWidth={2.75} color="#5FC2D9" />
              </div>
            </a>

            <p className="text-justify">
              O projeto Amicis tem como propósito a criação de uma aplicação
              clonada do <b>Twitter</b>, utilizando conceitos de orientação a
              objetos e a linguagem de programação <b>Java</b>. Sendo seu
              objetivo principal é implementar a API necessária para visualizar
              e publicar postagens, buscando reproduzir as principais
              funcionalidades do famoso aplicativo de mídia social.
            </p>
            <Tools
              tools={['Java', 'Python', 'MySQL', 'Docker']}
              rep="https://github.com/maykonjuso/2022.2-Amicis"
            />
          </div>
        </div>
        <div className="group/item flex justify-between gap-16 rounded-xl border border-transparent duration-200 max-lg:w-full max-lg:flex-col max-lg:gap-8 lg:px-6 lg:py-8 lg:hover:border-white-10 lg:hover:bg-slate-400/5">
          <div className="h-44 w-2/4 rounded-sm max-lg:w-full xl:w-96">
            <Image
              priority
              src={Anac}
              alt="ANAC"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="flex w-2/3 flex-col gap-5 max-lg:w-full ">
            <a
              href="https://github.com/maykonjuso/airaccidents"
              target="_blank"
              className="group/edit flex cursor-pointer items-center gap-3"
            >
              <h2 className="bg-gradient-to-r from-cyan-500 to-white-100 bg-clip-text text-4xl font-bold text-transparent max-lg:w-full">
                Air Accidents
              </h2>
              <div className="invisible transition group-hover/edit:translate-x-2 lg:group-hover/item:visible">
                <ChevronRight size={32} strokeWidth={2.75} color="#5FC2D9" />
              </div>
            </a>

            <p className="text-justify">
              O <b>Air Accidents</b> explora uma base de dados disponiblizada
              pela ANAC relacionada à acidentes áreos, aplicando técnicas de
              análise de dados e visualização para criar <b>dashboards</b>{' '}
              informativos e acessíveis. Sendo assim, por meio dessas
              ferramentas, buscou-se fornecer insights valiosos sobre
              <b> acidentes aéreos no Brasil</b>, contribuindo para a melhoria
              contínua da segurança na aviação civil e o aprimoramento do setor
              como um todo.
            </p>
            <Tools
              tools={['Python', 'Jupyter', 'Dash', 'Power BI']}
              rep="https://github.com/maykonjuso/airaccidents"
            />
          </div>
        </div>
        <div className="group/item flex justify-between gap-16 rounded-xl border border-transparent duration-200 max-lg:w-full max-lg:flex-col max-lg:gap-8 lg:px-6 lg:py-8 lg:hover:border-white-10 lg:hover:bg-slate-400/5">
          <div className="h-44 w-2/4 rounded-sm max-lg:w-full xl:w-96">
            <Image
              priority
              src={Cnh}
              alt="CNH"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="flex w-2/3 flex-col gap-5 max-lg:w-full ">
            <a
              href="https://github.com/maykonjuso/carteiradigital"
              target="_blank"
              className="group/edit flex cursor-pointer items-center gap-3"
            >
              <h2 className="bg-gradient-to-r from-cyan-500 to-white-100 bg-clip-text text-4xl font-bold text-transparent max-lg:w-full">
                Carteira Digital de Trânsito
              </h2>
              <div className="invisible transition group-hover/edit:translate-x-2 lg:group-hover/item:visible">
                <ChevronRight size={32} strokeWidth={2.75} color="#5FC2D9" />
              </div>
            </a>
            <p className="text-justify">
              Projeto apresenta os resultados de uma pesquisa realizada com
              usuários do aplicativo <b>Carteira Digital de Trânsito</b>. A
              pesquisa teve como objetivo identificar as falhas anteriores do
              aplicativo e avaliar a <b>satisfação dos usuários</b> após a
              correção dessas falhas. Todos os participantes da pesquisa
              expressaram sua aceitação das correções realizadas e
              compartilharam suas opiniões sobre as melhorias implementadas.
            </p>
            <Tools
              tools={['Python', 'Figma', 'Miro', 'Power BI']}
              rep="https://github.com/maykonjuso/carteiradigital"
            />
          </div>
        </div>
      </div>
      <Footer />
    </PageWrapper>
  )
}
