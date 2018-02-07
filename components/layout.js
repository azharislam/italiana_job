import React from 'react';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';

export default ({ children }) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
);
