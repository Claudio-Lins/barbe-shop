import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Sobre } from '../components/Sobre'
import { Testimony } from '../components/Testimony'

import { Hero } from '../components/Hero'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Barber Shop</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Barbearia Oldfashion" />
      </Head>
      <div className="">
        <main className="">
          <Hero />
          <Sobre />
          <Testimony />
        </main>
      </div>
    </>
  )
}

export default Home
