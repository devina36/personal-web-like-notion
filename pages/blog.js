import { motion } from 'framer-motion';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import DescProject from './component/DescProject';

const blog = () => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <>
      <motion.div
        key={'lay1'}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'tween' }}
      >
        <DescProject
          urlImg={'/assets/blog_.png'}
          icon={'👾'}
          title={'Simple blog with authorization'}
          desc={
            ' This is my first project using laravel. I build a simple website blog with authorization using laravel and bootstrap'
          }
          btn={
            <>
              <a className="btn-repo mr-3" href="https://github.com/devina36/Blog_Laravel">
                repo
                <span className="ml-1">
                  <BsGithub />
                </span>
              </a>
            </>
          }
          tag={
            <>
              <span className="tag tag-blue mr-1 inline-block">html</span>
              <span className="tag tag-yellow mr-1 inline-block">css</span>
              <span className="tag tag-red mr-1 inline-block">laravel</span>
              <span className="tag tag-green mr-1 inline-block">bootstrap</span>
              <span className="tag tag-purple mr-1 inline-block">mysql</span>
            </>
          }
          key={'blog'}
        />
      </motion.div>
    </>
  );
};
export default blog;
