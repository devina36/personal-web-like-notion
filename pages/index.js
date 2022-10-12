import Hero from './component/Hero';
import About from './component/About';
import Project from './component/Project';
import Skill from './component/Skill';
import Experience from './component/Experience';
import Sosmed from './component/Sosmed';
import Footer from './component/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <>
      <motion.div
        key={'lay'}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'tween' }}
      >
        <Hero />
        <Sosmed />
        <About />
        <Experience />
        <Skill />
        <Project />
        <Footer />
      </motion.div>
    </>
  );
}
