import Head from 'next/head'
import { Header } from '../../components/header'
import styles from './workshops.module.css';

export default function Arduino() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HCI Portfolio | Julian van Beek</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Arduino</h1>
        <>
          <h2>Assignments</h2>
          <h3>3B</h3>
          <iframe width="315" height="560" src="https://streamable.com/e/p6yn2y"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <h3>4C</h3>
          <iframe width="315" height="560" src="https://streamable.com/e/hpdi2l"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <h3>6C</h3>
          <iframe width="315" height="560" src="https://streamable.com/e/e3whrm"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <h3>7A</h3>
          <iframe width="315" height="560" src="https://streamable.com/e/1f5j1m"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <h3>8A</h3>
          <iframe width="315" height="560" src="https://streamable.com/e/nm62n0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <h3>9C</h3>
          <iframe width="315" height="560" src="https://streamable.com/e/3fq9jg"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <h3>11C</h3>
          <iframe width="315" height="560" src="https://streamable.com/e/362137"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <h3>12D</h3>
          <iframe width="315" height="560" src="https://streamable.com/e/xosuhq"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

          <h3>13A</h3>
          <iframe width="315" height="560" src="https://streamable.com/e/9ofa3i"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <h3>14E</h3>
          <iframe width="315" height="560" src="https://streamable.com/e/odhtyt"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <h3>15B</h3>
          <iframe width="315" height="560" src="https://streamable.com/e/qvvg7s"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <h3>16D</h3>
          <iframe width="315" height="560" src="https://streamable.com/e/bkh8b7"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </>
      </main>
    </div>
  )
}
