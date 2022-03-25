import type { AppProps } from 'next/app'
import { WindowSizeProvider } from '../providers/windowSize'
import { GlobalStyle } from '../styles/global'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WindowSizeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </WindowSizeProvider>
  )
}

export default MyApp
