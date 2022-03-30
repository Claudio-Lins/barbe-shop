import Image from 'next/image'
import React from 'react'
import { useToast } from '../../hooks/useToast'
import { Header } from '../Header'

export function Hero() {
  const {toastSucess, toastFail } = useToast()
  return (
    <>
      <div className="relative h-screen w-full ">
        <Image
          className="brightness-50"
          src="/imgs/hero/image_01.jpg"
          alt="Hero"
          layout="fill"
          objectFit="cover"
          objectPosition="70%"
        />
      </div>
      <div className="flex justify-center">
        <Header />
        <div className="absolute top-20 mt-32 flex flex-col items-center justify-center xs:mt-44 2xl:top-72 2xl:items-start">
          <h1 className="text-3xl font-bold text-gray-50 sm:text-5xl">
            Barbearia do Rodrigo
          </h1>
          <span className="p-8 text-center text-gray-50 sm:px-20 sm:text-xl lg:container lg:px-56 2xl:mx-0 2xl:w-2/5 2xl:px-0 2xl:text-left">
            Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros
            commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Pra
            lá , depois divoltis porris, paradis. Casamentiss faiz malandris se
            pirulitá. Diuretics paradis num copo é motivis de denguis.
          </span>
          <button
            onClick={() => toastSucess("Agendamento realizado com sucesso!")}
           className="rounded-lg bg-barber-shop-orange px-16 py-4 font-bold uppercase text-gray-50 hover:brightness-50">
            Agende seu corte
          </button>
        </div>
      </div>
    </>
  )
}
