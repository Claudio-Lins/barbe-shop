import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import {Hero} from '../components/Hero'

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
        </main>
      </div>
    </>
  )
}

export default Home
