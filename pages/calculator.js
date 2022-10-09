import React from 'react';
import { BsArrowLeft, BsGithub, BsGlobe } from 'react-icons/bs';
import Header from './component/Header';
import ImgProject from './component/ImgProject';
import Link from 'next/link';

const calculator = () => {
  return (
    <>
      <Header />
      <ImgProject urlImg={'/assets/design2.png'} icon={'🧮'} key={'calculator'} />
      <section className="contain my-20">
        <div className="w-full px-4 sm:px-28 ">
          <div className="flex flex-col sm:flex-row justify-between">
            <div className=" sm:w-4/5">
              <h2 className="text-theme font-inter font-bold text-3xl mb-2">Calculator app with multiple theme</h2>
              <p className="text-theme sm:w-4/5">
                This is another challenge from frontend mentor. I build this calulator app with multiple theme using
                jquery and tailwindcss
              </p>
              <div className=" flex mt-7">
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
              </div>
            </div>
            <div className=" sm:w-1/5 mt-8 sm:mt-0">
              <h4 className="font-bold text-theme text-lg mb-2">Tech:</h4>
              <span className="tag tag-blue mr-1 inline-block">html</span>
              <span className="tag tag-yellow mr-1 inline-block">css</span>
              <span className="tag tag-red mr-1 inline-block">javascript</span>
              <span className="tag tag-green mr-1 inline-block">jquery</span>
              <span className="tag tag-purple mr-1 inline-block">tailwind</span>
            </div>
          </div>
          <Link href="/" passhref>
            <a className="text-theme flex items-center hover:text-accent hover:border-b-2 my-20 hover:border-accent w-fit group">
              <span className="mr-2">
                <BsArrowLeft />
              </span>
              <span>Back</span>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default calculator;