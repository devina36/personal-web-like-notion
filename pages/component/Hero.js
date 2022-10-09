import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <section className="contain">
      <div
        className="w-full shadow relative bg-gradient-to-r from-bubble-blue 
      via-bubble-pink to-accent h-40 rounded-none md:rounded-3xl transition-all ease-in-out"
      >
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-14">
          <div className=" p-1 rounded-full bg-transparent border-2 border-white dark:border-dark">
            <div className=" w-28 h-28 border:white border-2 rounded-full dark:border-dark">
              <Image src="/assets/1.jpg" className=" rounded-full w-full" width="200" height="200" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-20 px-4 sm:px-0">
        <h1 className="text-theme font-inter font-bold text-4xl sm:text-5xl mb-3">Devina Amalia.</h1>
        <h2
          className="font-inter font-bold text-2xl 
        text-transparent bg-clip-text bg-gradient-to-br 
        from-bubble-blue via-bubble-pink to-accent"
        >
          <Typewriter
            options={{
              strings: ['Frontend Developer.', 'Web Developer.'],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p className="text-theme">I like to craft solid and scalable frontend products with great user experiences</p>
      </div>
    </section>
  );
}
