import { PageWrapper } from '../page-wrapper'
import Footer from '../components/footer'
import Image from 'next/image'
import Unb from 'public/unb.png'
import Ifb from 'public/ifb.png'
import { Calendar, CalendarClock, MapPin, Timer } from 'lucide-react'

export default function education() {
  return (
    <PageWrapper>
      <div className="flex min-h-screen flex-col gap-10 px-48 py-24 max-lg:gap-16 max-lg:px-6 lg:px-32 2xl:px-80">
        <div className="group/item flex justify-between gap-16 rounded-xl border border-transparent max-lg:w-full max-lg:flex-col max-lg:gap-8 lg:px-6 lg:py-8 lg:hover:border-white-10 lg:hover:bg-slate-400/5">
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
        <div className="group/item flex justify-between gap-16 rounded-xl border border-transparent max-lg:w-full max-lg:flex-col max-lg:gap-8 lg:px-6 lg:py-8 lg:hover:border-white-10 lg:hover:bg-slate-400/5">
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
        <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-1 max-lg:gap-y-10">
          <div className="group/item flex flex-col justify-between gap-4 rounded-xl border border-transparent max-lg:w-full lg:px-8 lg:py-8 lg:hover:border-white-10 lg:hover:bg-slate-400/5">
            <h2 className="text-lg font-bold">Harvard University</h2>
            <h2>CS50&apos;s Introduction to Programming with Python</h2>
            <div className="flex flex-row gap-2">
              <Calendar />
              <p>Julho de 2023</p>
            </div>
            <div className="flex flex-row gap-2">
              <Timer />
              <p>40 horas</p>
            </div>
          </div>
          <div className="group/item flex flex-col justify-between gap-4 rounded-xl border border-transparent max-lg:w-full lg:px-8 lg:py-8 lg:hover:border-white-10 lg:hover:bg-slate-400/5">
            <h2 className="text-lg font-bold">Harvard University</h2>
            <h2>Data Science: R Basics</h2>
            <div className="flex flex-row gap-2">
              <Calendar />
              <p>Junho de 2023</p>
            </div>
            <div className="flex flex-row gap-2">
              <Timer />
              <p>20 horas</p>
            </div>
          </div>
          <div className="group/item flex flex-col justify-between gap-4 rounded-xl border border-transparent max-lg:w-full lg:px-8 lg:py-8 lg:hover:border-white-10 lg:hover:bg-slate-400/5">
            <h2 className="text-lg font-bold">Harvard University</h2>
            <h2>
              CS50&apos;s Introduction to Artificial Intelligence with Python
            </h2>
            <div className="flex flex-row gap-2">
              <Calendar />
              <p>Setembro de 2023</p>
            </div>
            <div className="flex flex-row gap-2">
              <Timer />
              <p>30 horas</p>
            </div>
          </div>
          <div className="group/item flex flex-col justify-between gap-4 rounded-xl border border-transparent max-lg:w-full lg:px-8 lg:py-8 lg:hover:border-white-10 lg:hover:bg-slate-400/5">
            <h2 className="text-lg font-bold">Harvard University</h2>
            <h2>Data Science: Machine Learning</h2>
            <div className="flex flex-row gap-2">
              <Calendar />
              <p>Julho de 2023</p>
            </div>
            <div className="flex flex-row gap-2">
              <Timer />
              <p>30 horas</p>
            </div>
          </div>
          <div className="group/item flex flex-col justify-between gap-4 rounded-xl border border-transparent max-lg:w-full lg:px-8 lg:py-8 lg:hover:border-white-10 lg:hover:bg-slate-400/5">
            <h2 className="text-lg font-bold">Universidade de Brasília</h2>
            <h2>Introdução a Experiência do Usuário (UX)</h2>
            <div className="flex flex-row gap-2">
              <Calendar />
              <p>Março de 2023</p>
            </div>
            <div className="flex flex-row gap-2">
              <Timer />
              <p>60 horas</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </PageWrapper>
  )
}
