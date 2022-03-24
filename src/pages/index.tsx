import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Card } from '../components/Card'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sintoniza-t</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Sintoniza-t" />
      </Head>
      <div className="">
        <main className="">
          <Card />
        </main>
      </div>
    </>
  )
}

export default Home
