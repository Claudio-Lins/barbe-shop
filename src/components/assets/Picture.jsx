import Image from 'next/image'

export function Picture({ src, alt }) {
  return (
      <div className="relative h-72 w-72 px-6 md:h-96 md:w-96 ml-4">
        <Image src={src} alt={alt} layout="fill" objectFit="cover" />
        <div className="absolute top-4 -left-4 h-72 w-72 border-2 border-barber-shop-orange md:h-96 md:w-96"></div>
      </div>
  )
}
