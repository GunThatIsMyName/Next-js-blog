import Head from "next/head";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
      <Head>
        <title>Juns Blog | ABOUT </title>
      </Head>
      <div>
        <h1>ABOUT</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo similique
          voluptatum blanditiis enim, reprehenderit earum labore ullam, amet
          itaque doloribus dolores officiis possimus? Dolorum tempora laboriosam
          explicabo at ullam doloribus?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo similique
          voluptatum blanditiis enim, reprehenderit earum labore ullam, amet
          itaque doloribus dolores officiis possimus? Dolorum tempora laboriosam
          explicabo at ullam doloribus?
        </p>

        <Link href="/">HOME</Link>
      </div>
    </>
  );
};

export default About;
