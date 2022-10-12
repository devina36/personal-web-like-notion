import { motion } from 'framer-motion';
import React from 'react';
import { BsGithub, BsGlobe } from 'react-icons/bs';
import DescProject from './component/DescProject';

const fylodark = () => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <>
      <motion.div
        key={'lay2'}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'tween' }}
      >
        <DescProject
          urlImg={'/assets/desktop-preview.jpg'}
          icon={'🎃'}
          title={'Fylo dark landing page'}
          desc={
            'This is challenge form frontend mentor to build landing page and my first project using tailwind. I build this responsive landing page using html, tailwindcss, and javascript'
          }
          btn={
            <>
              <a className="btn-repo mr-3" href="https://github.com/devina36/Fylo_landing_page_dark_theme">
                repo
                <span className="ml-1">
                  <BsGithub />
                </span>
              </a>
              <a className="btn-repo" href="https://devina36.github.io/Fylo_landing_page_dark_theme/">
                demo
                <span className="ml-1">
                  <BsGlobe />
                </span>
              </a>
            </>
          }
          tag={
            <>
              <span className="tag tag-blue mr-1 inline-block">html</span>
              <span className="tag tag-yellow mr-1 inline-block">css</span>
              <span className="tag tag-red mr-1 inline-block">javascript</span>
              <span className="tag tag-purple mr-1 inline-block">tailwind</span>
            </>
          }
          key={'dark'}
        />
      </motion.div>
    </>
  );
};

export default fylodark;
