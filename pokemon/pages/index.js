import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import SEO from "../components/Seo";


// ** server side rendering 🔥🔥🔥 **

// export const getServerSideProps=async()=>{
//   const response = await fetch(
//     "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
//   );
//   return {
//     props: {
//       list: await response.json()
//     }, // will be passed to the page component as props
//   }
// }

// ** static Generation rendering 🔥🔥🔥 **
export const getStaticProps=async()=>{
  const response = await fetch(
    "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
  );
  return {
    props: {
      list: await response.json()
    }, // will be passed to the page component as props
  }
}

export default function Home({list}) {
  return (
    <>
    {/* META TAGS */}
      <SEO title={`Pokemon | HOME`} website={`www.google.com`} description={`Pokeomon website description`} image={`https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg`} />
    {/* META TAGS */}

      <div className={styles.container}>
        <div className={styles.grid}>
          {list.map((pokemon) => (
            <div className={styles.card} key={pokemon.id}>
              <Link href={`/pokemon/${pokemon.id}`}>
                <a>
                  <img
                    src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                    alt={pokemon.name}
                  />
                  <h3>{pokemon.name}</h3>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
