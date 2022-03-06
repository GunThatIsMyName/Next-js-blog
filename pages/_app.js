import Layout from "../components/layout";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  console.log({ Component, pageProps }, "_APP");
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
