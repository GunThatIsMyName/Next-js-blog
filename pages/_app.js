import '../styles/global.css'

export default function App({ Component, pageProps }) {
    console.log({Component,pageProps},"_APP");
    return <Component {...pageProps} />
  }