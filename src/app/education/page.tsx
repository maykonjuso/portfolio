import { PageWrapper } from '../page-wrapper'
import Footer from '../components/footer'
import Image from 'next/image'
import Unb from 'public/unb.png'
import Ifb from 'public/ifb.png'
import { CalendarClock, MapPin } from 'lucide-react'

export default function education() {
  return (
    <PageWrapper>
      <div className="flex min-h-screen flex-col gap-20 px-48 py-24 max-lg:px-10 lg:px-32 2xl:px-80">
        <h2 className="text-2xl font-bold">Formação acadêmica</h2>
        <div className="flex justify-between gap-16 max-lg:w-full max-lg:flex-col max-lg:gap-8">
          <div className="h-44 w-2/4 max-lg:w-full xl:w-96">
            <Image
              priority
              src={Unb}
              alt="family music school"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="flex w-2/3 flex-col gap-5 max-lg:w-full">
            <div className="flex flex-col gap-2">
              <h2 className="bg-gradient-to-r from-cyan-500 to-white-100 bg-clip-text text-4xl font-bold text-transparent max-lg:w-full">
                Universidade de Brasília
              </h2>
              <h3 className="text-2xl font-medium">Engenharia de Software</h3>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <CalendarClock />
                <p>Julho de 2021 - Julho de 2026</p>
              </div>
              <div className="flex gap-2">
                <MapPin />
                <span>Brasília, Distrito Federal, Brasil.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-16 max-lg:w-full max-lg:flex-col max-lg:gap-8">
          <div className="h-44 w-2/4 max-lg:w-full xl:w-96">
            <Image
              priority
              src={Ifb}
              alt="family music school"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="flex w-2/3 flex-col gap-5 max-lg:w-full">
            <div className="flex flex-col gap-2">
              <h2 className="bg-gradient-to-r from-cyan-500 to-white-100 bg-clip-text text-4xl font-bold text-transparent max-lg:w-full">
                Instituto Federal de Brasília
              </h2>
              <h3 className="text-2xl font-medium">
                Técnico em Química Integrado ao Ensino Médio
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <CalendarClock />
                <p>Fevereiro de 2018 - Março de 2021</p>
              </div>
              <div className="flex gap-2">
                <MapPin />
                <span>Brasília, Distrito Federal, Brasil.</span>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold">Certificados</h2>
      </div>
      <Footer />
    </PageWrapper>
  )
}
