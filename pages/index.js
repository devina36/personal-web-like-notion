import Hero from './component/Hero';
import About from './component/About';
import Header from './component/Header';
import Project from './component/Project';
import Skill from './component/Skill';
import Experience from './component/Experience';
import Sosmed from './component/Sosmed';
import Footer from './component/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Devina Amalia Arindi</title>
        <link rel="icon" href="/me.png" />
      </Head>
      <Header />
      <Hero />
      <Sosmed />
      <About />
      <Experience />
      <Skill />
      <Project />
      <Footer />
    </>
  );
}
