import React from 'react';

export default function () {
  return (
    <section className="contain mb-20 mt-10">
      <div className=" px-28">
        <div className="flex flex-wrap items-center">
          <div className="w-1/2">
            <span className="title-section mb-10">
              <h2 className="text-theme font-inter font-bold text-2xl">About</h2>
            </span>
            <p className="border-l-2 border-theme p-4 text-theme">
              I am a Frontend Web developer. Interested in the entire Front-end spectrum and working on ambitious
              projects with positive people. Able to effectively self-manage during independent projects, as well as
              collaborate as part of a productive team.
            </p>
          </div>
          <img src="/assets/cuate.svg" className=" w-1/2 aspect-auto" alt="https://storyset.com/technology" />
        </div>
      </div>
    </section>
  );
}
