import Head from 'next/head'
import { Header } from '../../components/header'
import styles from './workshops.module.css';
import Image from 'next/image';

import opdr3 from '../../public/images/cv_3.png';


export default function ComputerVision() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HCI Portfolio | Julian van Beek</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Computer Vision</h1>
        <>
          <h2>Assignments</h2>
          <h3>Portfolio assignment 3</h3>
          <div>
            <Image src={opdr3} width="800px" height="400px"  />
          </div>
          <h3>Portfolio assignment 7</h3>
          <iframe width="560" height="315" src="https://streamable.com/e/at3hhq" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h3>Portfolio assignment 8</h3>
          <iframe width="560" height="315" src="https://streamable.com/e/oimpbe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h3>Portfolio assignment 9</h3>
          <iframe width="560" height="315" src="https://streamable.com/e/wh9nn2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </>
      </main>
    </div>
  )
}
