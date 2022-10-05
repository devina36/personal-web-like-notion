import React from 'react';
import ProjectItem from './ProjectItem';

export default function Project() {
  return (
    <section className="contain mb-20">
      <div className=" px-28">
        <h2 className=" text-theme font-inter font-bold text-2xl border-b-[1px] pb-3">
          <span className="text-4xl">👩🏻‍💻</span>
          Projects
        </h2>
        <div className="grid grid-cols-2 gap-12 mt-10">
          <ProjectItem title="Personal Webite" img={'/assets/portoweb.png'} href="/porto-web" />
          <ProjectItem title="Calculator App" img={'/assets/design2.png'} href="/calcultor-app" />
          <ProjectItem title="Fylo Dark Landing Page" img={'/assets/desktop-preview.jpg'} href="/fylo-dark" />
        </div>
      </div>
    </section>
  );
}
