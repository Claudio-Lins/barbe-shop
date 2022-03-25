import Image from 'next/image'

export function Picture() {
  return (
    <div className="ml-4">
    <div className="w-72 h-72 md:w-96 md:h-96 px-6 relative">
      <Image
        src="/imgs/sobre/img_sobre.jpg"
        alt="Barbearia"
        layout="fill"
        objectFit="cover"
      />
      <div className='absolute w-72 h-72 md:w-96 md:h-96 border-barber-shop-orange border-2 top-4 -left-4'></div>
    </div>
    </div>
  )
}
