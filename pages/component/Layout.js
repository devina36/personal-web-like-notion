import React from 'react';
import Header from './Header';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Devina Amalia</title>
        <link rel="icon" href="/me.png" />
      </Head>
      <Header />
      {children}
    </>
  );
}
