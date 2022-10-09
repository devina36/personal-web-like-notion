import Hero from './component/Hero';
import About from './component/About';
import Header from './component/Header';
import Project from './component/Project';
import Skill from './component/Skill';
import Experience from './component/Experience';
import Sosmed from './component/Sosmed';
import Footer from './component/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Sosmed />
      <About />
      <Experience />
      <Skill />
      <Project />
      <Footer dis={'w-full'} />
    </>
  );
}
