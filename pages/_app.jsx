import '@/styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfólio de Serafim Adão Gonga - Software Engineer & Functional Analyst" />
        <meta name="keywords" content="software engineer, functional analyst, developer, portfolio" />
        <meta name="author" content="Serafim Adão Gonga" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
