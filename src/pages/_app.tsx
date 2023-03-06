import { type AppType } from 'next/dist/shared/lib/utils';
import Head from 'next/head';

import '~/styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Dictionary web app</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
