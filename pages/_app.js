import Script from "next/script";
import Head from "next/head";
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return (
      <>
        <Script
            id="bootstrap-cdn"
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" />
        <Component {...pageProps} />
      </> );
}
