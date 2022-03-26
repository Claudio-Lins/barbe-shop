import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { ToastProvider } from '../hooks/useToast'
import { WindowSizeProvider } from '../hooks/useWindowSize'
import { GlobalStyle } from '../styles/global'
import '../styles/globals.css'
import "swiper/css/bundle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WindowSizeProvider>
      <ToastProvider>
      <GlobalStyle />
      <Toaster />
      <Component {...pageProps} />
      </ToastProvider>
    </WindowSizeProvider>
  )
}

export default MyApp
