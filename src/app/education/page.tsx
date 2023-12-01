import { PageWrapper } from '../page-wrapper'
import Footer from '../components/footer'
import Image from 'next/image'
import Unb from 'public/unb.png'
import Ifb from 'public/ifb.png'
import Harvard from 'public/harvard.png'
import { Calendar, CalendarClock, MapPin, Timer } from 'lucide-react'
import AcademicEducation from '../components/academicEducation'

export default function education() {
  return (
    <PageWrapper>
      <div className="flex min-h-screen flex-col gap-10 px-48 py-24 max-lg:gap-16 max-lg:px-6 lg:px-32 2xl:px-80">
        <AcademicEducation />
        <h2 className="text-2xl font-bold">Certificados</h2>
        <div className="grid grid-cols-2 gap-4 max-xl:grid-cols-1 max-xl:gap-y-10">
          <div className="group/item flex flex-row gap-8 rounded-xl border border-transparent lg:px-6 lg:py-6 lg:hover:border-white-10 lg:hover:bg-slate-400/5">
            <Image
              priority
              src={Harvard}
              alt="family music school"
              className="h-32 w-32 rounded-xl object-cover max-lg:h-24 max-lg:w-24"
            />
            <div className="flex flex-col gap-2">
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
          </div>
          <div className="group/item flex flex-row gap-8 rounded-xl border border-transparent lg:px-6 lg:py-6 lg:hover:border-white-10 lg:hover:bg-slate-400/5">
            <Image
              priority
              src={Harvard}
              alt="family music school"
              className="h-32 w-32 rounded-xl object-cover max-lg:h-24 max-lg:w-24"
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold">Harvard University</h2>
              <h2>Data Science: R Basics</h2>
              <div className="flex flex-row gap-2">
                <Calendar />
                <p>Junho de 2023</p>
              </div>
              <div className="flex flex-row gap-2">
                <Timer />
                <p>40 horas</p>
              </div>
            </div>
          </div>
          <div className="group/item flex flex-row gap-8 rounded-xl border border-transparent lg:px-6 lg:py-6 lg:hover:border-white-10 lg:hover:bg-slate-400/5">
            <Image
              priority
              src={Harvard}
              alt="family music school"
              className="h-32 w-32 rounded-xl object-cover max-lg:h-24 max-lg:w-24"
            />
            <div className="flex flex-col gap-2">
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
          </div>
          <div className="group/item flex flex-row gap-8 rounded-xl border border-transparent lg:px-6 lg:py-6 lg:hover:border-white-10 lg:hover:bg-slate-400/5">
            <Image
              priority
              src={Harvard}
              alt="family music school"
              className="h-32 w-32 rounded-xl object-cover max-lg:h-24 max-lg:w-24"
            />
            <div className="flex flex-col gap-2">
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
          </div>
          <div className="group/item flex flex-row gap-8 rounded-xl border border-transparent lg:px-6 lg:py-6 lg:hover:border-white-10 lg:hover:bg-slate-400/5">
            <Image
              priority
              src={Unb}
              alt="family music school"
              className="h-32 w-32 rounded-xl object-cover max-lg:h-24 max-lg:w-24"
            />
            <div className="flex flex-col gap-2">
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
      </div>
      <Footer />
    </PageWrapper>
  )
}
