import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="container mx-auto w-full px-16">
      <div className="w-full relative bg-gradient-to-r from-bubble-blue to-bubble-pink h-40 md:rounded-3xl transition-all ease-in-out shadow-md">
        <div className="absolute left-1/2 -translate-x-1/2 md:-bottom-14">
          <div className=" p-1 rounded-full bg-transparent border-2 border-white">
            <div className=" w-28 h-28">
              <Image
                src="/assets/1.jpg"
                className=" rounded-full w-full"
                width="200"
                height="200"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-20">
        <div className="w-4/5 text-center">
          <h1 className="text-white font-inter font-bold text-5xl mb-3">
            Devina Amalia.
          </h1>
          <h2 className="text-white font-inter font-bold text-2xl">
            Front-end Developer
          </h2>
          <p className="text-white">
            I like to craft solid and scalable frontend
            products with great user experiences
          </p>
        </div>
      </div>
    </section>
  );
}
