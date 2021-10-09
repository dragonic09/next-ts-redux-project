import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Profiles } from './profiles';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Practice UI Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home
