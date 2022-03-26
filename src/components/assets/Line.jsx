import React from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'


export function Line() {
  const { windowWidth } = useWindowSize()

  const width = windowWidth * 0.15 / 2
  return (
    <>
    <div className={`h-1 rounded-full bg-barber-shop-orange mb-2`} 
    style={{
      width: width,
    }}></div>
    </>
  )
}
