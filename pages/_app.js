import "../styles/globals.css";
import Head from "next/head";
import { Fragment } from "react";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>trace.dev</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="favicon.ico" type="image/x-icon"></link>
      </Head>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}

export default MyApp;
