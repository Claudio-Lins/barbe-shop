import Image from 'next/image'
import React, { useContext } from 'react'
import WindowSizeContext from '../../providers/windowSize'

export function Servico(props) {
  const { windowWidth, windowHeight } = useContext(WindowSizeContext)
  console.log(windowWidth, windowHeight)

  return (
    <div className="flex h-[150px] w-[150px] flex-col items-center justify-center">
      <div className="">
        <Image
          src={props.src}
          width={windowWidth > 768 ? '70px' : '50px'}
          height={windowWidth > 768 ? '70px' : '50px'}
          alt={props.alt}
        />
      </div>
      <h3 className="text-center font-bold text-white xl:text-2xl">
        {windowWidth}
      </h3>
      <div className="my-1 h-0.5 w-10 rounded-full bg-barber-shop-orange"></div>
      <p className="text-center text-[10px] text-white xl:text-sm">
        {props.descricao}
      </p>
    </div>
  )
}
