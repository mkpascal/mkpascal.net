import Script from "next/script";
import Head from "next/head";
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return (
      <>
        <Head>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
                   crossOrigin="anonymous"
          />
          <link
                async
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          />
        </Head>
        <Script
            id="bootstrap-cdn"
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" />
        <Component {...pageProps} />
      </> );
}
