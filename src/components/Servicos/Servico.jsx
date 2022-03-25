import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export function Servico(props) {
  // Get window width
  const [windowWidth, setWindowWidth] = useState('')

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth)
    })
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth)
    }
  }, [])

  console.log(windowWidth)
  
  return (
    <div className="flex h-[150px] w-[150px] flex-col items-center justify-center">
      <div className="">
        <Image 
        src={props.src} 
        width={41} 
        height={41} 
        alt={props.alt} />
      </div>
      <h3 className="text-center font-bold text-white">{props.titulo}</h3>
      <div className="my-1 h-0.5 w-10 rounded-full bg-barber-shop-orange"></div>
      <p className="text-center text-[10px] text-white">{props.descricao}</p>
    </div>
  )
}
