import React from 'react';
import Head from 'next/head';
import { MoralisProvider } from 'react-moralis';

import { MORALIS_APP_ID, MORALIS_SERVER_URL } from 'shared/constants';
import { Header, Footer, Transactions } from 'components';
import styles from './index.module.scss';

const Home = () => (
    <MoralisProvider appId={MORALIS_APP_ID} serverUrl={MORALIS_SERVER_URL}>
      <div className={styles.container}>
        <Head>
          <title>Metamask Connection Demo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <Header />
        <main className={styles.main}>
          <Transactions />
        </main>

        <Footer>
          Mevan Abeydeera
        </Footer>
      </div>
    </MoralisProvider>
  );

export default Home;
