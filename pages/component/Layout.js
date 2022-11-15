import React, { useEffect, useState } from 'react';
import Header from './Header';
import Head from 'next/head';
import { RingLoader } from 'react-spinners';

export default function Layout({ children }) {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true)
  }, []);

  return (
    <>
      {load ? (
        <>
          <Head>
            <title>Devina Amalia</title>
            <link rel="icon" href="/me.png" />
          </Head>
          <Header />
          {children}
        </>
      ) : (
        <div className=" bg-dark dark:bg-white w-full h-screen flex-col flex justify-center items-center">
          <RingLoader color="#f7b36a" size={60} />
          <p className="font-inter font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-bubble-blue via-bubble-pink to-accent">
            Loading ...
          </p>
        </div>
      )}
    </>
  );
}
