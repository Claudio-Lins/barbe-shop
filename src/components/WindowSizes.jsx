import React, { useContext } from 'react'
import WindowSizeContext from '../providers/windowSize'


export function WindowSizes() {
  const { windowWidth, windowHeight } = useContext(WindowSizeContext)
  return (
    <div className="absolute bg-white right-0 px-1 z-10">
      <span>{windowWidth} x {windowHeight}</span>
    </div>
  )
}
