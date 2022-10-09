import React from 'react';

export default function About() {
  return (
    <section className="contain mb-28 mt-10">
      <div className="px-0 sm:px-12 lg:px-28">
        <div className="flex flex-col lg:flex-row flex-wrap tems-center">
          <div className=" w-full lg:w-1/2 px-5 sm:px-0">
            <span className="title-section mb-10">
              <h2 className="text-theme font-inter font-bold text-2xl">About</h2>
            </span>
            <p className="border-l-2 border-theme p-4 text-theme">
              I am a Frontend Web developer. Interested in the entire Front-end spectrum and working on ambitious
              projects with positive people. Able to effectively self-manage during independent projects, as well as
              collaborate as part of a productive team.
            </p>
          </div>
          <img
            src="/assets/cuate.svg"
            className="w-full max-w-xl mx-auto px-1 sm:px-0 lg:w-1/2 lg:aspect-auto"
            alt="https://storyset.com/technology"
          />
        </div>
      </div>
    </section>
  );
}
