import React from 'react';
import Head from 'next/head';
import { MoralisProvider } from 'react-moralis';

import { MORALIS_APP_ID, MORALIS_SERVER_URL } from 'shared/constants';
import { Header, Footer, Transactions } from 'components';

const Home = () => (
    <MoralisProvider appId={MORALIS_APP_ID} serverUrl={MORALIS_SERVER_URL}>
      <div className="container">
        <Head>
          <title>Metamask Connection Demo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <Header />
        <main>
          <Transactions />
        </main>

        <Footer>
          By Mevan Abeydeera
        </Footer>
      </div>
    </MoralisProvider>
  );

export default Home;
