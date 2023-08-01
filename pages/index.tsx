import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ethers } from "ethers";
import abi from "../data/SPL.json";

const Home: NextPage = () => {

  // SEPOLIA ADDRESS
  const contractAddress = ""

  // Create buy token with sale contract
  const buySPL = async() => {
    const contract = new ethers.Contract("", "");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Octaocean Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Buy SPL Token 💸
        </h1>

        <p className={styles.description}>
          Cost 1 wBTC
        </p>

        <ConnectButton />

        <div className='m-12'>
          <button className='bg-blue-600 rounded-md py-2 px-10 text-white	font-sans text-base subpixel-antialiased'
            /*onClick={""}*/
          >
              BUY
          </button>
        </div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Balance of SPL</h2>
            <p></p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Balance of wBTC</h2>
            <p></p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Cost of wBTC</h2>
            <p></p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Transfer SPL</h2>
            <p>
              
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Octaocean test
        </a>
      </footer>
    </div>
  )
}

export default Home
