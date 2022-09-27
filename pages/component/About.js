import Image from 'next/image';
import React from 'react';

export default function () {
  return (
    <section className="contain mt-12">
      <div className="wrap">
        <div className="w-4/5">
          <span className="before:block before:-z-10 before:absolute before:-inset-x-1 before:bottom-1 before:-skew-y-3 before:h-2 before:bg-accent relative inline-block">
            <h2 className="text-theme font-inter font-bold text-2xl">About</h2>
          </span>
          <div className="flex flex-wrap items-center">
            <p className="border-l-2 border-theme w-1/2 p-4 text-theme">
              I am a Frontend Web developer. Interested in the entire Front-end spectrum and working on ambitious
              projects with positive people. Able to effectively self-manage during independent projects, as well as
              collaborate as part of a productive team.
            </p>
            <a className="w-1/2 flex justify-center items-center" href="https://storyset.com/technology">
              <Image src="/assets/cuate.svg" width="400" height="250" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
