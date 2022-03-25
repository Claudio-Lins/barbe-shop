import React, { useEffect, useState, createContext } from "react";

const WindowSizeContext = createContext({});

export function WindowSizeProvider ({ children }) {
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

  return (
    <WindowSizeContext.Provider value={{windowWidth}}>
      {children}
    </WindowSizeContext.Provider>
  );
}

export default WindowSizeContext;