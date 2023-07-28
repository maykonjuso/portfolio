'use client'

import { useRef, useState } from 'react'
import { PageWrapper } from '../page-wrapper'
import { Check, Copy, Send } from 'lucide-react'

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false)
  const emailRef = useRef<HTMLAnchorElement>(null)

  const handleEmailCopy = () => {
    if (!emailRef.current) return
    emailRef.current.classList.add('copied')
    const email = emailRef.current.textContent
    navigator.clipboard.writeText(email || '')
    setEmailCopied(true)

    setTimeout(() => {
      setEmailCopied(false)
      if (emailRef.current) {
        emailRef.current.classList.remove('copied')
      }
    }, 2000)
  }

  return (
    <PageWrapper>
      <div className="flex min-h-screen flex-col items-center justify-center gap-10 px-48 py-24 max-lg:px-6 lg:px-32 2xl:px-80">
        <div className="flex flex-col items-center justify-center gap-2">
          <Send size={48} />
          <h2 className="mt-2 text-4xl font-bold max-lg:text-3xl">
            Deseja falar comigo?
          </h2>
          <h2 className="text-2xl font-medium max-lg:text-xl">
            mande uma mensagem
          </h2>
        </div>
        <div className="flex h-max w-max flex-row items-center justify-between rounded-xl border max-lg:w-max">
          <a ref={emailRef}>
            <span className="h-full px-14 py-4 max-lg:px-6 lg:text-lg">
              maykola1331@gmail.com
            </span>
          </a>
          <button onClick={handleEmailCopy} className="h-full border-l-2 p-4">
            {emailCopied ? <Check color="#32CD32" /> : <Copy />}
          </button>
        </div>
      </div>
    </PageWrapper>
  )
}
