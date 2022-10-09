import React from 'react';
import ProjectItem from './ProjectItem';

export default function Project() {
  return (
    <section className="contain mb-28">
      <div className="px-5 sm:px-12 lg:px-28">
        <h2 className=" text-theme font-inter font-bold text-2xl border-b-[1px] pb-3">
          <span className="text-4xl">👩🏻‍💻</span>
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12 mt-10">
          <ProjectItem title="Personal Webite" img={'/assets/portoweb.png'} url="/porto-web" key={'project'} />
          <ProjectItem
            title="Calculator App with Multiple Theme"
            img={'/assets/design2.png'}
            url="/calculator-app"
            key={'project2'}
          />
          <ProjectItem
            title="Fylo Dark Landing Page"
            img={'/assets/desktop-preview.jpg'}
            url="/fylo-dark"
            key={'project3'}
          />
          <ProjectItem title="Simple Blog with Authorization" img={'/assets/blog_.png'} url="/blog" key={'project4'} />
          <ProjectItem title="Simple Notes Reactjs" img={'/assets/my-notess.png'} url="/notes" key={'project5'} />
          <ProjectItem title="Simple Weather App" img={'assets/weather-app.png'} url="/weather-app" key={'project6'} />
        </div>
      </div>
    </section>
  );
}
