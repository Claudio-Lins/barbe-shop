import React from 'react'
import { useWindowSize } from '../hooks/useWindowSize'

export function WindowSizes() {
  const { windowWidth, windowHeight } = useWindowSize()
  return (
    <div className=" fixed right-2 top-1 z-10 rounded-md text-xs text-gray-100">
      <span>
        {windowWidth} x {windowHeight}
      </span>
    </div>
  )
}
