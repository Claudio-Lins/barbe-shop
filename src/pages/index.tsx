import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero } from '../components/Hero'
import { Servicos } from '../components/Servicos'
import { Sobre } from '../components/Sobre'
import { TablePrice } from '../components/TablePrice'
import { Testimony } from '../components/Testimony'

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
          <Servicos />
          <TablePrice />
        </main>
      </div>
    </>
  )
}

export default Home
