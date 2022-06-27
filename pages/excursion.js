import Head from 'next/head'
import { Header } from '../components/header'
import styles from './topics/topics.module.css';

import Image from 'next/image';

import img1 from '../public/images/excursie/excursion1.png';
import img2 from '../public/images/excursie/excursion2.png';
import img3 from '../public/images/excursie/excursion3.png';
import img4 from '../public/images/excursie/excursion4.png';

export default function Excursion() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HCI Portfolio | Julian van Beek</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Excursion</h1>
        <>
        <h2>Wildfire</h2>
        <p className={styles.paragraph}>
        Als excursie ben ik naar het Museon in Den Haag geweest. Hierbij heb ik de installatie Wildfire bezocht in het Oneplanet gedeelte.
        <br /><br />
        De installatie die ik gekozen heb is een installatie die je laat zien welke stappen je kan ondernemen bij een natuurbrand. Het doel van deze installatie is om de gebruiker te informeren over welke gevaren er rondom het huis zijn tijdens een natuurbrand en hoe deze op te lossen.
        <br /><br />
        Zo wordt er bijvoorbeeld uitgelegd dat de houtstapel in de tuin snel vlam kan vatten en die verplaatst moet worden. Op dat moment is het de bedoeling dat de gebruiker kijkt waar de stapel met hout ligt en hierbij het blok verplaatst.
        <br /><br />
        De technologie die gebruikt wordt is een kinect. Hierbij kan de kinect zien waar de verschillende schijven zijn en zo de locatie op het scherm weergeven. De kinect zit in het houten frame boven het scherm en wijst naar beneden.
        <br /><br />
        Ook zijn er twee knoppen waarmee je de applicatie kan bedienen. Hier kan je onder andere keuzes mee maken tijdens de vragen die gesteld worden, maar ook het menu bedienen om de installatie te starten.
        <br /><br />
        Het interessante van deze installatie is dat er op een leuke manier iets heel belangrijks wordt geleerd aan de gebruiker. Ik wist van te voren niet wat ik moest doen bij een brand en ben door deze installatie daar op een leuke manier achter gekomen.
        <br /><br />
        De installatie is een eenvoudige installatie wat inhoud dat het voor elke gebruiker gemakkelijk te gebruiken is. Op het begin was het mij een klein beetje onduidelijk wat ik moest doen, maar na zelf de schijven te verplaatsen wanneer dat gevraagd werd was het een stuk duidelijker.
        <br /><br />
        Al met al denk ik dat deze installatie een goed voorbeeld is van een interactieve installatie die ook nog handige informatie kan geven aan de gebruiker.</p>
        <div>
         <Image alt='image' alt='image' src={img1} width="450px" height="600px"  />
         <Image alt='image' alt='image' src={img2} width="800px" height="600px"  />
         <Image alt='image' alt='image' src={img4} width="450px" height="600px"  />
         <Image alt='image' alt='image' src={img3} width="800px" height="600px"  />
        </div>
        </>
      </main>
    </div>
  )
}
