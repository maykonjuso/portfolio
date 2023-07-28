import { PageWrapper } from '../page-wrapper'
import Footer from '../components/footer'
import fms from 'public/fms.png'
import twitter from 'public/twitter.png'
import Anac from 'public/anac.png'
import Cnh from 'public/cnh.png'
import Image from 'next/image'
import Tools from './components/tools'

export default function projects() {
  return (
    <PageWrapper>
      <div className="flex min-h-screen flex-col gap-20 px-48 py-24 max-lg:px-10 lg:px-32 2xl:px-80">
        <div className="flex justify-between gap-16 max-lg:w-full max-lg:flex-col max-lg:gap-8">
          <div className="h-44 w-2/4 max-lg:w-full xl:w-96">
            <Image
              priority
              src={fms}
              alt="family music school"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="flex w-2/3 flex-col gap-5 max-lg:w-full">
            <h2 className="bg-gradient-to-r from-cyan-500 to-white-100 bg-clip-text text-4xl font-bold text-transparent max-lg:w-full">
              Family Music School
            </h2>
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
            />
          </div>
        </div>
        <div className="flex justify-between gap-16 max-lg:w-full max-lg:flex-col max-lg:gap-8">
          <div className="h-44 w-2/4 rounded-sm max-lg:w-full xl:w-96">
            <Image
              priority
              src={twitter}
              alt="Amicis"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="flex w-2/3 flex-col gap-5 max-lg:w-full">
            <h2 className="bg-gradient-to-r from-cyan-500 to-white-100 bg-clip-text text-4xl font-bold text-transparent max-lg:w-full">
              Amicis
            </h2>
            <p className="text-justify">
              O projeto Amicis tem como propósito a criação de uma aplicação
              clonada do <b>Twitter</b>, utilizando conceitos de orientação a
              objetos e a linguagem de programação <b>Java</b>. Sendo seu
              objetivo principal é implementar a API necessária para visualizar
              e publicar postagens, buscando reproduzir as principais
              funcionalidades do famoso aplicativo de mídia social.
            </p>
            <Tools tools={['Java', 'Python', 'MySQL', 'Docker']} />
          </div>
        </div>
        <div className="flex justify-between gap-16 max-lg:w-full max-lg:flex-col max-lg:gap-8">
          <div className="h-44 w-2/4 rounded-sm max-lg:w-full xl:w-96">
            <Image
              priority
              src={Anac}
              alt="ANAC"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="flex w-2/3 flex-col gap-5 max-lg:w-full">
            <h2 className="bg-gradient-to-r from-cyan-500 to-white-100 bg-clip-text text-4xl font-bold text-transparent max-lg:w-full">
              Air Accidents
            </h2>
            <p className="text-justify">
              O Air Accidents explora uma base de dados disponiblizada pela ANAC
              relacionada à acidentes áreos, aplicando técnicas de análise de
              dados e visualização para criar dashboards informativos e
              acessíveis. Sendo assim, por meio dessas ferramentas, buscou-se
              fornecer insights valiosos sobre acidentes aéreos no Brasil,
              contribuindo para a melhoria contínua da segurança na aviação
              civil e o aprimoramento do setor como um todo.
            </p>
            <Tools tools={['Python', 'Jupyter', 'Dash', 'Power BI']} />
          </div>
        </div>
        <div className="flex justify-between gap-16 max-lg:w-full max-lg:flex-col max-lg:gap-8">
          <div className="h-44 w-2/4 rounded-sm max-lg:w-full xl:w-96">
            <Image
              priority
              src={Cnh}
              alt="CNH"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="flex w-2/3 flex-col gap-5 max-lg:w-full">
            <h2 className="bg-gradient-to-r from-cyan-500 to-white-100 bg-clip-text text-4xl font-bold text-transparent max-lg:w-full">
              Carteira Digital de Trânsito
            </h2>
            <p className="text-justify">
              Projeto apresenta os resultados de uma pesquisa realizada com
              usuários do aplicativo Carteira Digital de Trânsito. A pesquisa
              teve como objetivo identificar as falhas anteriores do aplicativo
              e avaliar a satisfação dos usuários após a correção dessas falhas.
              Todos os participantes da pesquisa expressaram sua aceitação das
              correções realizadas e compartilharam suas opiniões sobre as
              melhorias implementadas.
            </p>
            <Tools tools={['Python', 'Figma', 'Miro', 'Power BI']} />
          </div>
        </div>
      </div>
      <Footer />
    </PageWrapper>
  )
}
