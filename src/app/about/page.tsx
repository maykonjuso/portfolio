import { ChevronRight } from 'lucide-react'
import { PageWrapper } from '../page-wrapper'

export default function about() {
  return (
    <PageWrapper>
      <div className="mx-48 mt-24 flex min-h-screen flex-col gap-20">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col gap-14">
            <div className="flex justify-between ">
              <h2 className="w-1/5 bg-gradient-to-r from-cyan-500 to-white-100 bg-clip-text text-4xl font-bold text-transparent">
                Um pouco mais sobre mim
              </h2>
              <p className="w-3/6 text-justify text-white-100">
                Como graduando em Engenharia de Software pela Universidade de
                Brasília (UnB), minha jornada acadêmica tem sido emocionante e
                repleta de oportunidades para expandir meus conhecimentos na
                área. Desde o início do curso, concentrei meus esforços em
                desenvolvimento Full-Stack e Ciência de Dados, áreas que me
                fascinam profundamente.
              </p>
              <ul className="flex flex-col items-end">
                <li className="font-bold text-white-100">Áreas de atuação</li>
                <li className="text-white-100">Data Science</li>
                <li className="text-white-100">Machine learning</li>
                <li className="text-white-100">Front-end</li>
                <li className="text-white-100">Back-end</li>
              </ul>
            </div>
            <button className="flex max-w-fit flex-row items-center gap-2 rounded-full border border-white-10 bg-white-10 px-3 duration-200 hover:opacity-90">
              <span className="text-xl font-bold text-sky-500">•</span>
              <span className="text-sm font-medium text-white-100">
                Confira minha formação
              </span>
              <ChevronRight size={16} strokeWidth={2.5} color="#f9f9f9" />
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-24">
          <div className="w-1/2">
            <h2 className="bg-gradient-to-r from-cyan-500 to-white-100 bg-clip-text pb-8 text-4xl font-bold text-transparent">
              Data Scientist
            </h2>
            <p className="text-justify text-white-100">
              Minha paixão pela Ciência de Dados me levou a explorar um vasto
              conjunto de ferramentas e técnicas para extrair informações
              valiosas de conjuntos de dados complexos. Através do estudo de
              linguagens como Python e R, adquiri habilidades diversificadas e
              pude utilizar bibliotecas renomadas, como NumPy, Pandas e
              Scikit-learn. Essas ferramentas poderosas me permitiram realizar
              análises estatísticas detalhadas, criar modelos preditivos
              precisos e visualizar os resultados de forma clara. Combinando meu
              conhecimento em Ciência de Dados e programação, fui capaz de
              desvendar insights significativos a partir dos dados,
              impulsionando a inovação e o sucesso dos projetos em que
              participei. Estou entusiasmado com as perspectivas futuras, uma
              vez que a Ciência de Dados continua a evoluir e desempenhar um
              papel cada vez mais relevante em nossa sociedade em constante
              transformação.
            </p>
          </div>
          <div className="w-1/2">
            <h2 className="bg-gradient-to-r from-cyan-500 to-white-100 bg-clip-text pb-8 text-4xl font-bold text-transparent">
              Developer
            </h2>
            <p className="text-justify text-white-100">
              Como graduando em Engenharia de Software pela Universidade de
              Brasília (UnB), tenho me dedicado com entusiasmo ao
              desenvolvimento Full-Stack, adquirindo conhecimentos abrangentes e
              habilidades práticas em Ciência de Dados e no uso de ferramentas e
              bibliotecas JavaScript, como React, Angular e Next.js. Além disso,
              aprofundei minha experiência no desenvolvimento de backend
              utilizando Node.js e na integração com bancos de dados
              relacionais, como MySQL. Essa combinação de habilidades me
              permitiu abordar desafios complexos, criando aplicações com
              interfaces atraentes, funcionalidades avançadas e um backend
              confiável. Estou animado com as perspectivas futuras de aprimorar
              ainda mais minhas habilidades e contribuir para soluções
              inovadoras na Engenharia de Software.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
