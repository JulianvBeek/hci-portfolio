import Head from 'next/head';
import { Header } from '../../components/header';
import styles from './topics.module.css';
import Image from 'next/image';
import Link from 'next/link';

import koffieAfbeelding from '../../public/images/koffie.jpg';

export default function Playful() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HCI Portfolio | Julian van Beek</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Playful Interaction</h1>
        <>
          <h2>Nieuw Concept</h2>
          <p className={styles.paragraph}>Het idee van mijn concept is een interactieve koffieautomaat wat mensen vrolijker maakt. Het idee is als volgt:
          <br /><br />
          De koffieautomaat meet de glimlach van een persoon en afhankelijk van de glimlach kan de gebruiker een vormpje van koffie kiezen. Hoe groter de glimlach is hoe leuker of mooier de vormpjes in de koffie zijn.
          <br /><br />  
          De interactie die tussen de koffieautomaat en de speler plaatsvind is dat de speler zijn stemming gemeten wordt door het apparaat en afhankelijk van de stemming kan de gebruiker een figuurtje voor in de koffie kiezen.
          <br /><br />  
          Meestal halen mensen koffie, omdat ze een energie boost nodig hebben. Door de automaat wat interactiever te maken en de gebruikers te laten lachen wordt hun stemming nog vrolijker.
          <br /><br />  
          De input die de automaat gebruikt is een foto om de stemming van een persoon te meten. Dit wordt gemeten door de glimlach en uitgedrukt in een score. Verder is er een touchscreen, waarop de gebruiker een keuze kan maken uit de figuurtjes die de gebruiker behaald heeft met zijn glimlach.
          <br /><br />
          Deze automaat is een gestructureerde vorm van interactie, omdat alle mogelijkheden van de interactie al vast staan. Verder is het een competitieve installie, omdat je een zo hoog mogelijke score wilt en daardoor zoveel mogelijk keuze aan figuurtjes heb. Deze automaat is een interdependent shared space, omdat de gebruikers dezelfde ruimte gebruiken.</p>
          <div>
          <Image alt='image' alt='image' className={styles.image} src={koffieAfbeelding} width="342px" height="512px"  />
          </div>
        </>
        <>
          <h2>Onderzoek</h2>
          <Link href="https://www.market-trend.com.hk/showcaseDetail?id=195">
            <h3 className={styles.link}>Pocky, the interactive photo booth</h3>  
          </Link>
          <p className={styles.paragraph}>Pocky is een Japans snoepmerk. Om een nieuwe smaak te promoten is er een snoepautomaat gemaakt die afhankelijk van iemands glimlach de nieuwe smaak gratis laat proeven. Het doel hierbij is om op een leuke manier de nieuwe smaak van Pocky de wereld in te brengen. Op de automaat zit een touchscreen, hierop kan de gebruiker op een knop drukken en wordt er afgeteld op het scherm.
            <br /><br />
            Nadat er afgeteld is wordt er een foto gemaakt en zal de glimlach van de persoon uitgedrukt worden in een score. Hoe groter de glimlach hoe hoger de score. Bij het behalen van een score van 100 of hoger komt de nieuwe smaak van Pocky uit de automaat, zodat de gebruiker deze kan proeven.
            <br /><br />
            Ook kan de gebruiker een QR-code scannen waarmee ze een kopie van de foto krijgen en deze kunnen delen.
            <br /><br />
            De input die bij deze automaat gebruikt wordt is een camera waar de foto mee gemaakt wordt en uiteindelijk de glimlach gemeten wordt. Ook wordt er gebruik gemaakt van een touchscreen, zodat het apparaat weet wanneer er een foto gemaakt moet worden als de gebruiker op het scherm drukt.
            <br /><br />
            De output van deze automaat is de score van de glimlach die geprojecteerd wordt op het scherm en de foto die gemaakt. Verder wordt de automaat getriggerd bij een glimlach met een score van 100 of hoger.
            <br /><br />
            Bij deze automaat wordt er gebruik gemaakt van een gestructureerde vorm van interactie. Het proces is heel duidelijk en heeft twee keuzes, de score wordt wel of niet gehaald. Deze installatie kan je maar met 1 persoon tegelijk gebruiken een heeft een vorm van competitie, omdat je de score van 100 of hoger wilt halen.
            Verder is deze installatie een interdependent shared space, omdat mensen dezelfde ruimte gebruiken, maar verschillende resultaten krijgen.</p>
        </>
        <>
          <h2>Reflectie</h2>
          <p className={styles.paragraph}>Ik vind dit onderwerp heel interessant om over geleerd te hebben. Dit komt vooral doordat dagelijkse activiteiten op een interessante manier leuker gemaakt worden. Ook kan het sommige problemen oplossen. Bijvoorbeeld het afvalprobleem. In de les was een voorbeeld van een interactieve prullenbak, waardoor mensen sneller geneigd zijn hun afval weg te gooien. Dit zorgt ervoor dat het probleem van zwerfafval op straat deels voorkomen wordt.
          <br /><br />
          In de toekomst zullen nog veel van dit soort uitvindingen bedacht worden. Vooral het idee dat er op een leuke speelse manier een probleem opgelost kan worden spreekt mij heel erg aan. Soms is het idee heel simpel, maar haalt het heel veel mensen over om wat aan een probleem te doen.
          <br /><br />
          Dit onderwerp heeft mij meer dan verbaasd. Ik dacht in eerste instantie aan games bij het horen van playful interaction en dat het bedoeld was om mensen te vermaken. Dat is deels ook zo, maar ik was mij er niet van bewust dat het ook daadwerkelijk problemen op kan lossen.
          <br /><br />
          Al met al vond ik dit onderwerp zeer interessant om meer over te leren en heb ik er een hoop over geleerd.</p>
        </>
      </main>
    </div>
  )
}
