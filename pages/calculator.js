import { motion } from 'framer-motion';
import React from 'react';
import { BsGithub, BsGlobe } from 'react-icons/bs';
import DescProject from './component/DescProject';

const calculator = () => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <>
      <motion.div
        key={'lay3'}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'tween' }}
      >
        <DescProject
          urlImg={'/assets/design2.png'}
          icon={'🧮'}
          title={'Calculator app with multiple theme'}
          desc={
            'This is another challenge from frontend mentor. I build this calulator app with multiple theme using jquery and tailwindcss'
          }
          btn={
            <>
              <a className="btn-repo mr-3" href="https://github.com/devina36/Calculator-App-with-Multiple-Theme">
                repo
                <span className="ml-1">
                  <BsGithub />
                </span>
              </a>
              <a className="btn-repo" href="https://devina36.github.io/Calculator-App-with-Multiple-Theme/">
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
              <span className="tag tag-green mr-1 inline-block">jquery</span>
              <span className="tag tag-purple mr-1 inline-block">tailwind</span>
            </>
          }
          key={'calculator'}
        />
      </motion.div>
    </>
  );
};

export default calculator;
