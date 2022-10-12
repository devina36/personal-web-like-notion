import { motion } from 'framer-motion';
import React from 'react';
import { BsGithub, BsGlobe } from 'react-icons/bs';
import DescProject from './component/DescProject';

const porto = () => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <>
      <motion.div
        key={'lay5'}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'tween' }}
      >
        <DescProject
          urlImg={'/assets/portoweb.png'}
          icon={'👩🏻‍💼'}
          title={'Personal website'}
          desc={'This is personal website using reactjs and reactdom'}
          btn={
            <>
              <a className="btn-repo mr-3" href="https://github.com/devina36/Portofolio_React">
                repo
                <span className="ml-1">
                  <BsGithub />
                </span>
              </a>
              <a className="btn-repo" href="https://devinaportofolio.netlify.app/">
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
              <span className="tag tag-gray mr-1 inline-block">reactjs</span>
              <span className="tag tag-purple mr-1 inline-block">tailwind</span>
            </>
          }
          key={'porto'}
        />
      </motion.div>
    </>
  );
};
export default porto;
