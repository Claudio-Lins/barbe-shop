import { Header } from '../Header'
import Image from 'next/image'

export function Hero() {
  return (
    <>
      <div className="relative h-screen w-full">
        <Image
          src="/imgs/cover_hero.jpg"
          alt="Hero"
          layout="fill"
          objectFit="cover"
          objectPosition="70%"
        />
      </div>
      <div>
        <Header />
        <div className="absolute top-40 mt-24 flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-50">
            Barbearia do Rodrigo
          </h1>
          <span className="p-8 text-center sm:text-xl sm:px-20 lg:px-40 lg:container text-gray-50">
            Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros
            commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Pra
            lá , depois divoltis porris, paradis. Casamentiss faiz malandris se
            pirulitá. Diuretics paradis num copo é motivis de denguis.
          </span>
          <button className='bg-[#FCA92C] px-16 py-4 rounded-lg text-gray-50 font-bold uppercase hover:brightness-50'>
            Agende seu corte
          </button>
        </div>
      </div>
    </>
  )
}
