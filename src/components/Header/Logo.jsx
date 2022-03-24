import Image from 'next/image'

export function Logo() {
  return (
    <div className="relative w-[50px] h-7 sm:w-[80px] sm:h-[48px]">
      <Image
        src="/imgs/logo.svg"
        alt="Logo"
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}
