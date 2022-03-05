import Link from "next/link";
import Head from "next/head";
import React from "react";
import Script from "next/script";
import Layout from "../../components/layout";

const FirstPage = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
};

export default FirstPage;
