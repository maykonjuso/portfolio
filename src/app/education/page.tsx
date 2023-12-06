import { PageWrapper } from '../page-wrapper'
import Footer from '../components/footer'
import Image from 'next/image'
import Unb from 'public/unb.png'
import Harvard from 'public/harvard.png'
import { Calendar, Timer } from 'lucide-react'
import AcademicEducation from '../components/academicEducation'
import Certificate from '../components/certificate'

export default function education() {
  return (
    <PageWrapper>
      <div className="flex min-h-screen flex-col gap-10 px-48 py-24 max-lg:gap-16 max-lg:px-6 lg:px-32 2xl:px-80">
        <AcademicEducation />
        <h2 className="text-2xl font-bold">Certificados</h2>
        <div className="grid grid-cols-2 gap-4 max-xl:grid-cols-1 max-xl:gap-y-10">
          <Certificate />
        </div>
      </div>
      <Footer />
    </PageWrapper>
  )
}
