import Image from 'next/image'
import { useToast } from '../../hooks/useToast'

export function Agende() {
  const { toastSucess, toastFail } = useToast()
  return (
    <>
      <main>
        <div className="relative h-32 w-full md:h-52 mt-8">
          <Image
            className=" brightness-50"
            src="/imgs/agende/agende_01.jpeg"
            alt="agende"
            layout="fill"
            objectFit="cover"
            objectPosition="70%"
          />
          <div className="absolute flex h-full w-full  items-center justify-evenly px-4">
            <div className="w-1/2">
            <h3 className="text-xl md:text-4xl text-white font-bold">Agende seu corte</h3>
            <p className="md:text-xl text-white ">Faça aqui seu agendamento</p>
            </div>
            <button
              onClick={() => toastSucess('Agendamento realizado com sucesso!')}
              className="rounded-lg bg-barber-shop-orange px-4 py-2 md:px-16 md:py-4 font-bold uppercase text-gray-50 hover:brightness-50"
            >
              Agende seu corte
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
