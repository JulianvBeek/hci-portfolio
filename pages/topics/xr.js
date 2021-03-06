import Head from 'next/head'
import { Header } from '../../components/header'
import styles from './topics.module.css';
import Image from 'next/image';
import Link from 'next/link';
import autoAfbeelding from '../../public/images/xr.png';

export default function xr() {
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
          <h2>Onderzoek</h2>
          <Link href="https://www.youtube.com/watch?v=9CHv3PCu5pM">
            <h3 className={styles.link}>Minecraft Earth</h3>  
          </Link>
          <Link href="https://minecraft.fandom.com/wiki/Minecraft_Earth">
            <a className={styles.link}>https://minecraft.fandom.com/wiki/Minecraft_Earth</a>
          </Link>
          <span style={{color: '#666', marginTop: '16px'}}>Mojang Studios</span>
          <p className={styles.paragraph}>Minecraft earth is een gratis te spelen augmented reality game gemaakt door Mojang Studios. De game gaat over het bouwen van constructies en het verzamelen van materialen door te reizen in de echte wereld. Ik vind dit een leuk voorbeeld, omdat de spelers van het spel hierdoor naar buiten gaan in plaats van binnen te zitten.
            <br /><br />
            De technologie die in deze game gebruikt wordt is augmented reality. Hierbij worden de objecten en gebouwen van de game via de camera op het scherm geprojecteerd, zodat het lijkt alsof de objecten en gebouwen er daadwerkelijk zijn.</p>

          <br />

          <Link href="https://www.youtube.com/watch?v=OF4qGVAM9Yo">
            <h3 className={styles.link}>Peronio Pop-up Book</h3>  
          </Link>
          <Link href="https://uploadvr.com/peronio-pop-up-book-vr-ar/">
            <a className={styles.link}>https://uploadvr.com/peronio-pop-up-book-vr-ar/</a>
          </Link>
          <span style={{color: '#666', marginTop: '16px'}}>Ovni Studios</span>
          <p className={styles.paragraph}>Peronio is een interactief spel gemaakt door Ovni Studios. Het spel vertelt een verhaal van een jongen die niet weet wat hij later wil worden. Het doel van dit spel is om kinderen op een leuke manier inzicht te geven in verschillende beroepen. Doormiddel van augmented reality wordt er een interactief boek geprojecteerd op een tafel waarin de gebruiker verschillende dingen kan doen. Bijvoorbeeld een spel waarin je te werk gaat als tandarts. Dit spel werkt ook met VR waarbij de gebruiker daadwerkelijk zijn handen kan gebruiken om het spel te besturen.</p>

          <br />

          <Link href="https://www.youtube.com/watch?v=2sj2iQyBTQs">
            <h3 className={styles.link}>Pokemon GO</h3>  
          </Link>
          <Link href="https://pokemongo.fandom.com/wiki/Pok??mon_GO">
            <a className={styles.link}>https://pokemongo.fandom.com/wiki/Pok??mon_GO</a>
          </Link>
          <span style={{color: '#666', marginTop: '16px'}}>Niantic</span>
          <p className={styles.paragraph}>Pokemon Go is een app gemaakt door Niantic. Deze app is gebaseerd op het wereldberoemde video spel van Pokemon. Het bijzondere van deze app is dat pokemon GO echte locaties gebruikt om spelers aan te moedigen naar buiten te gaan en in de buurt verschillende pokemons te ontdekken.
          <br /><br />
          De app maakt gebruik van augmented reality. De pokemons worden geprojecteerd in de echte wereld, bijvoorbeeld in bosjes. Als de speler de camera van de telefoon richting de pokemon houdt kan de gebruiker deze pokemon proberen te vangen door op het scherm een pokeball te gooien naar de pokemon toe.</p>
        </>
        <>
          <h2>Nieuw concept</h2>
          <p className={styles.paragraph}>
          Reizen met vr, zodat een lange rit in de trein of een lange vlucht een stuk leuker wordt.
          <br /><br />

          Het concept dat ik bedacht heb zorgt ervoor dat reizen in het openbaar vervoer een stuk leuker wordt. In dit voorbeeld gebruik ik de trein. De ramen van de trein projecteren verschillende gebeurtenissen, waardoor het voor de reiziger aanvoelt alsof ze daadwerkelijk in een film zitten en de tijd in het openbaar vervoer snel voorbij gaat. Hierbij wordt de technologie gebruikt die ook in de nieuwste auto&apos;s gebruikt wordt zoals hieronder te zien in:
          </p>
          <div>
            <Image alt='image' src={autoAfbeelding} width="600px" height="400px"  />
          </div>
          <p className={styles.paragraph}>Hieronder is een schets te zien van het concept:</p>
    	    {/* TODO: Insert Image */}
        </>
        <>
          <h2>Reflectie</h2>
          <p className={styles.paragraph}>
          In dit onderwerp was ik al meer bekend. Ook al wist ik er al wat meer van blijft het mij nog steeds interesseren. De uitvindingen met deze techniek worden steeds echter wat mij blijft verbazen. Ik vind het heel interessant dat bepaalde dingen geprojecteerd kunnen worden wat anders nooit gerealiseerd kan worden.
          <br /><br />
          Ook heeft het nog invloed op de leefstijl van ons. Bijvoorbeeld Pokemon Go zorgt ervoor dat mensen weer meer naar buiten gaan in plaats van binnen op de iPad of telefoon te zitten.
          <br /><br />
          In de toekomst zal de techniek nog veel uitgebreider worden en zullen de gekste dingen gemaakt kunnen worden. Ik ben heel benieuwd wat er nog aan gaat komen. Misschien kan je straks vanuit huis het gevoel hebben alsof je op vakantie bent met bijvoorbeeld UV lichten en projecties van de omgeving in een ander land.
          <br /><br />
          Wat ik geleerd heb is wel wat ik verwacht had. Ik was al redelijk op de hoogte van de projecten die gebruik maken van deze technologie.
          </p>
        </>
      </main>
    </div>
  )
}
