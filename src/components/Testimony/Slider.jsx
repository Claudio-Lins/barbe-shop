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
        <div className="flex flex-col h-[150px] items-center justify-center">
          <div className="relative w-20 h-20">
          <Image 
            src="/imgs/testimony/vaadin_quote-right.svg"
            alt="testimony"
            layout="fill"
          />
          </div>
          <h3 className="font-bold text-xl text-white">A melhor Barbearia de São Paulo!</h3>
          <span className='text-[#FCA92C]'>Claudio lins</span>
        </div>
        <div className="flex flex-col h-[150px] items-center justify-center">
          <div className="relative w-20 h-20">
          <Image 
            src="/imgs/testimony/vaadin_quote-right.svg"
            alt="testimony"
            layout="fill"
          />
          </div>
          <h3 className="font-bold text-xl text-white">Maravilhosa, recomendo!</h3>
          <span className='text-[#FCA92C]'>Karen lins</span>
        </div>
      </Slide>
    </div>
  )
}
