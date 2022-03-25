import { useState } from 'react'
import Image from 'next/image'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

export function Slider() {
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: <div></div>,
    nextArrow: <div></div>
  };
  return (
    <div>
      <Slide {...properties}>
        <div className="flex flex-col h-44 md:h-52 2xl:h-80 items-center justify-center">
          <div className="relative w-20 h-20">
          <Image 
            src="/imgs/testimony/vaadin_quote-right.svg"
            alt="testimony"
            layout="fill"
          />
          </div>
          <h3 className="font-bold text-xl 2xl:text-3xl text-white">A melhor Barbearia de São Paulo!</h3>
          <span className='text-barber-shop-orange 2xl:text-xl'>Claudio lins</span>
        </div>
        <div className="flex flex-col h-44 md:h-52 2xl:h-80 items-center justify-center">
          <div className="relative w-20 h-20">
          <Image 
            src="/imgs/testimony/vaadin_quote-right.svg"
            alt="testimony"
            layout="fill"
          />
          </div>
          <h3 className="font-bold text-xl 2xl:text-3xl text-white">A melhor Barbearia de São Paulo!</h3>
          <span className='text-barber-shop-orange 2xl:text-xl'>Karen lins</span>
        </div>
        
      </Slide>
    </div>
  )
}
