import Head from 'next/head';
import Link from 'next/link'
import styles from "../styles/utils.module.css";


export default function Home() {
  return (
    <>
    <Head>
      <title>Juns Blog | HOME </title>
    </Head>
    <div>
      <h1 className={styles.heading2Xl}>Cool Blakc</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo similique voluptatum blanditiis enim, reprehenderit earum labore ullam, amet itaque doloribus dolores officiis possimus? Dolorum tempora laboriosam explicabo at ullam doloribus?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo similique voluptatum blanditiis enim, reprehenderit earum labore ullam, amet itaque doloribus dolores officiis possimus? Dolorum tempora laboriosam explicabo at ullam doloribus?</p>

      <Link href="/">HOME</Link>
    </div>
    </>
  )
}
