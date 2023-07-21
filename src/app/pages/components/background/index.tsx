import Image from 'next/image'
import photo from 'public/blur.png'
import Particles from '../starsLight'

export default function Background() {
  return (
    <>
      <Particles
        className="animate-fade-in absolute inset-0 -z-10"
        quantity={150}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 flex justify-center overflow-hidden">
        <Image
          priority
          src={photo}
          alt="Logo site - Maykon"
          className="w-[71.75rem] max-w-none flex-none"
        />
      </div>
    </>
  )
}
