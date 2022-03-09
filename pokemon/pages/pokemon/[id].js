import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import SEO from "../../components/Seo";
import styles from "../../styles/Details.module.css";


// // ** server side rendering 🔥🔥🔥 **

// export const getServerSideProps=async({params})=>{
//   const response = await fetch(
//     `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${params.id}.json`
//   );
//   return {
//     props:{
//       pokemon: await response.json()
//     }
//   }
// }

// getStaticPaths 🔥🔥 
// Static Generation 을 사용 하기 위해서는 getStaticPaths 사용해야함.
// NEXT 제공되는 paths 들을 통해서 가 pre-render 할거니까 

export const getStaticPaths=async()=>{
  const response = await fetch(
    "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
  );
  const list = await response.json();
  // const pathId = list.map(item=>{
  //   return {
  //     params:{id:item.id.toString()}
  //   }
  // })

  return {
    paths: list.map(item=>{
      return {params:{id:item.id.toString()}}
    }),
    // paths: pathId,
    fallback: false // false or 'blocking'
  };
}


// ** static Generation rendering 🔥🔥🔥 **
export const getStaticProps=async({params})=>{
  const response = await fetch(
    `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${params.id}.json`
  );
  return {
    props:{
      pokemon: await response.json()
    }
  }
}

const Pokemon = ({pokemon}) => {
  return (
    <section>
        {/* SEO META TAGS  */}
        <SEO title={`${pokemon.name} | Pokemon`} website={`www.google.com`} description={`${pokemon.name} Description`} image={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`} />

      <div>
        <Link href="/">Back To Home</Link>
      </div>
      <div className={styles.layout}>
        <div>
          <img
            className={styles.picture}
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
            alt={pokemon.name.english}
          />
        </div>
        <div>
          <div className={styles.name}>{pokemon.name}</div>
          <div className={styles.type}>{pokemon.type.join(", ")}</div>
          <table>
            <thead className={styles.header}>
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {pokemon.stats.map(({ name, value }) => (
                <tr key={name}>
                  <td className={styles.attribute}>{name}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Pokemon;
