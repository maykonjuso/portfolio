import StarrySky from '../stars'
import Image from 'next/image'
import photo from 'public/blur.png'

export default function Background() {
  return (
    <>
      <StarrySky />
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
