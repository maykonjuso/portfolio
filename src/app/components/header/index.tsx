'use client'
import logo from 'public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import {
  Briefcase,
  FolderGit2,
  GraduationCap,
  Phone,
  User2,
} from 'lucide-react'

export default function Header() {
  const ref = useRef<HTMLElement>(null)
  const [isIntersecting, setIntersecting] = useState(true)
  const [windowWidth, setWindowWidth] = useState<number>(0)

  useEffect(() => {
    const updateWindowWidth = () => setWindowWidth(window.innerWidth)
    updateWindowWidth()
    window.addEventListener('resize', updateWindowWidth)
    return () => {
      window.removeEventListener('resize', updateWindowWidth)
    }
  }, [])
  const isLess = windowWidth < 840
  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <header
      ref={ref}
      className={`fixed inset-x-0 top-0 z-50 flex h-16 w-full flex-row items-center justify-between border-b px-48 backdrop-blur duration-200 max-lg:px-10  ${
        isIntersecting
          ? 'border-transparent bg-zinc-900/0'
          : 'bg-zinc-900/500  border-zinc-800 '
      }`}
    >
      <Link href={'/'}>
        <div className="flex flex-row items-center gap-3">
          <Image priority src={logo} alt="Logo Maykon" />
          {!isLess && (
            <h1 className="font-semibold text-white-100">Portfólio</h1>
          )}
        </div>
      </Link>
      <nav className="flex flex-row gap-8">
        <Link
          href={'/about'}
          className="cursor-pointer font-semibold text-white-100 duration-200 hover:text-slate-300"
        >
          {isLess ? <User2 /> : 'Sobre'}
        </Link>
        <Link
          href={'/projects'}
          className="cursor-pointer font-semibold text-white-100 duration-200 hover:text-slate-300"
        >
          {isLess ? <FolderGit2 /> : 'Projetos'}
        </Link>
        <Link
          href={'experience'}
          className="cursor-pointer font-semibold text-white-100 duration-200 hover:text-slate-300"
        >
          {isLess ? <Briefcase /> : 'Experiência'}
        </Link>
        <Link
          href={'/education'}
          className="cursor-pointer font-semibold text-white-100 duration-200 hover:text-slate-300"
        >
          {isLess ? <GraduationCap /> : 'Formação'}
        </Link>
      </nav>
      {!isLess && (
        <button className="rounded-xl bg-white-100 px-6 py-2 text-sm duration-200 hover:bg-slate-200">
          <span className="font-semibold text-black-100">contato</span>
        </button>
      )}
    </header>
  )
}
