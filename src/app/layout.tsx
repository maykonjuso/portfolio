import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Image from 'next/image'
import photo from 'public/blur.png'
import Particles from './components/starsLight'
import { Mail } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfólio - Maykon Júnio ',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt_BR">
      <body
        className={`${inter.className} min-h-screen overflow-x-hidden bg-black-100 antialiased`}
      >
        <Particles
          className="animate-fade-in absolute inset-0 -z-10"
          quantity={100}
        />
        <main className="absolute min-h-full min-w-full ">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-0 flex justify-center overflow-hidden">
            <Image
              priority
              src={photo}
              alt="Logo site - Maykon"
              className="w-[71.75rem] max-w-none flex-none"
            />
          </div>

          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
