import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-zinc-900/500 flex h-10 items-center justify-between border-t border-zinc-800/90 px-48">
      <h2 className="text-xs">
        Designed by{' '}
        <a
          href="https://github.com/maykonjuso"
          target="_blank"
          className="cursor-pointer font-semibold"
        >
          Maykon Júnio
        </a>
      </h2>
      <nav className="flex gap-8">
        <a href="https://github.com/maykonjuso" target="_blank">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/in/maykon13/" target="_blank">
          <Linkedin size={18} />
        </a>
        <a href="mailto:maykola1331@gmail.com" target="_blank">
          <Mail size={18} />
        </a>
      </nav>
    </footer>
  )
}
