import { motion } from 'framer-motion';
import React from 'react';
import { BsGithub, BsGlobe } from 'react-icons/bs';
import DescProject from './component/DescProject';

const weather = () => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <>
      <motion.div
        key={'lay6'}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'tween' }}
      >
        <DescProject
          urlImg={'/assets/weather-app.png'}
          icon={'🌤'}
          title={'Simple weather app'}
          desc={'This is simple weather app. This app will help you to know about the weather of any location'}
          btn={
            <>
              <a className="btn-repo mr-3" href="https://github.com/devina36/simple_weatherapp">
                repo
                <span className="ml-1">
                  <BsGithub />
                </span>
              </a>
              <a className="btn-repo" href="https://devina36.github.io/simple_weatherapp/">
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
              <span className="tag tag-green mr-1 inline-block">api</span>
            </>
          }
          key={'weather'}
        />
      </motion.div>
    </>
  );
};
export default weather;
