import Hero from './component/Hero';
import About from './component/About';
import Header from './component/Header';
import Project from './component/Project';
import Sosmed from './component/Sosmed';
import Skill from './component/Skill';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Sosmed />
      <About />
      <Skill />
      <Project />
    </>
  );
}
