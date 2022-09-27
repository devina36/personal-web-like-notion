import Image from 'next/image';
import React from 'react';

export default function () {
  return (
    <section className="contain mt-9">
      <div className="wrap">
        <div className="w-4/5">
          <h2
            className="text-white font-inter font-bold text-2xl 
                border-b-2 border-white"
          >
            About
          </h2>
          <div className="flex flex-wrap items-center">
            <p className="border-l-2 border-white w-1/2 p-4 text-white">
              I am a Junior Front-end developer. Interested
              in the entire Front-end spectrum and working
              on ambitious projects with positive people.
              Able to effectively self-manage during
              independent projects, as well as collaborate
              as part of a productive team.
            </p>
            <a
              className="w-1/2 flex justify-center items-center"
              href="https://storyset.com/technology"
            >
              <Image
                src="/assets/cuate.svg"
                width="400"
                height="280"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
