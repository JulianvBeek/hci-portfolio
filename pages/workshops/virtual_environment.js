import Head from 'next/head'
import { Header } from '../../components/header'
import styles from './workshops.module.css';
import Image from 'next/image';

import aframe2 from '../../public/images/aframe2.png';

import step1 from '../../public/images/tutorial1/start.png';
import step2 from '../../public/images/tutorial1/Step 2.png';
import step3 from '../../public/images/tutorial1/Step 3.png';
import step4 from '../../public/images/tutorial1/step 4.png';
import step5 from '../../public/images/tutorial1/step 5.png';
import step6 from '../../public/images/tutorial1/step 6.png';
import step7 from '../../public/images/tutorial1/step 7.png';
import step8 from '../../public/images/tutorial1/step 8.png';

import step2v1 from '../../public/images/tutorial2/step1.png';
import step2v2 from '../../public/images/tutorial2/step2.png';
import step2v3 from '../../public/images/tutorial2/step3.png';
import step2v4 from '../../public/images/tutorial2/step4.png';
import step2v5 from '../../public/images/tutorial2/step5.png';
import step2v6 from '../../public/images/tutorial2/step6.png';
import step2v7 from '../../public/images/tutorial2/step7.png';
import step2v8 from '../../public/images/tutorial2/step8.png';
import step2v9 from '../../public/images/tutorial2/step9.png';
import step2v10 from '../../public/images/tutorial2/step10.png';
import step2v11 from '../../public/images/tutorial2/step11.png';

export default function VirtualEnvironment() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HCI Portfolio | Julian van Beek</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Virtual Environment</h1>
        <>
          <h2>Aframe</h2>
          <h3>Opdr 2</h3>
          <div>
            <Image alt='image' src={aframe2} width="600px" height="400px"  />
          </div>

          <h3>Opdr 4</h3>
          <iframe width="560" height="455" src="https://streamable.com/e/hqb6u0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

          <h3>Opdr 6</h3>
          <iframe width="560" height="455" src="https://streamable.com/e/qno5k3"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </>
        <>
          <h2>Unity</h2>
          <h3>Tutorial 1: FPS</h3>
          <div>
            <Image alt='image' style={{marginRight: '20px'}} src={step1} width="600px" height="400px"  />
            <Image alt='image' style={{marginLeft: '20px'}} src={step2} width="600px" height="400px"  />
            <Image alt='image' style={{marginRight: '20px'}} src={step3} width="600px" height="400px"  />
            <Image alt='image' style={{marginLeft: '20px'}} src={step4} width="600px" height="400px"  />
            <Image alt='image' style={{marginRight: '20px'}} src={step5} width="600px" height="400px"  />
            <Image alt='image' style={{marginLeft: '20px'}} src={step6} width="600px" height="400px"  />
            <Image alt='image' style={{marginRight: '20px'}} src={step7} width="600px" height="400px"  />
            <Image alt='image' style={{marginLeft: '20px'}} src={step8} width="600px" height="400px"  />
          </div>

          <h3>Tutorial 1: FPS</h3>
          <div>
            <Image alt='image' style={{marginRight: '20px'}} src={step2v1} width="600px" height="400px"  />
            <Image alt='image' style={{marginLeft: '20px'}} src={step2v2} width="600px" height="400px"  />
            <Image alt='image' style={{marginRight: '20px'}} src={step2v3} width="600px" height="400px"  />
            <Image alt='image' style={{marginLeft: '20px'}} src={step2v4} width="600px" height="400px"  />
            <Image alt='image' style={{marginRight: '20px'}} src={step2v5} width="600px" height="400px"  />
            <Image alt='image' style={{marginLeft: '20px'}} src={step2v6} width="600px" height="400px"  />
            <Image alt='image' style={{marginRight: '20px'}} src={step2v7} width="600px" height="400px"  />
            <Image alt='image' style={{marginLeft: '20px'}} src={step2v8} width="600px" height="400px"  />
            <Image alt='image' style={{marginLeft: '20px'}} src={step2v9} width="600px" height="400px"  />
            <Image alt='image' style={{marginLeft: '20px'}} src={step2v10} width="600px" height="400px"  />
            <Image alt='image' style={{marginLeft: '20px'}} src={step2v11} width="600px" height="400px"  />
          </div>
        </>
      </main>
    </div>
  )
}
