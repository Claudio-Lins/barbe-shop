import React, { useEffect, useState, createContext } from "react";

const WindowSizeContext = createContext({});

export function WindowSizeProvider ({ children }) {
  const [windowWidth, setWindowWidth] = useState('')
  const [windowHeight, setWindowHeight] = useState('')

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    })
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }
  }, [])

  return (
    <WindowSizeContext.Provider value={{windowWidth, windowHeight}}>
      {children}
    </WindowSizeContext.Provider>
  );
}

export default WindowSizeContext;