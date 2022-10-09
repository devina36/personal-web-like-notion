import Link from 'next/link';
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
          <ProjectItem
            title={'Personal Webite'}
            img={'/assets/portoweb.png'}
            url={
              <Link href="/porto" passHref>
                <a
                  className='className=" bg-[#F5EEFC] text-txt-orange font-bold block w-28 py-1 mx-auto rounded-lg mt-2 border-2
             hover:border-2 hover:border-[#F5EEFC] hover:bg-transparent hover:text-[#F5EEFC] transition-colors ease-in-out duration-300"'
                >
                  Show more
                </a>
              </Link>
            }
            key={'project'}
          />
          <ProjectItem
            title={'Calculator App with Multiple Theme'}
            img={'/assets/design2.png'}
            url={
              <Link href="/calculator" passHref>
                <a
                  className='className=" bg-[#F5EEFC] text-txt-orange font-bold block w-28 py-1 mx-auto rounded-lg mt-2 border-2
             hover:border-2 hover:border-[#F5EEFC] hover:bg-transparent hover:text-[#F5EEFC] transition-colors ease-in-out duration-300"'
                >
                  Show more
                </a>
              </Link>
            }
            key={'project2'}
          />
          <ProjectItem
            title={'Fylo Dark Landing Page'}
            img={'/assets/desktop-preview.jpg'}
            url={
              <Link href="/fylodark" passHref>
                <a
                  className='className=" bg-[#F5EEFC] text-txt-orange font-bold block w-28 py-1 mx-auto rounded-lg mt-2 border-2
         hover:border-2 hover:border-[#F5EEFC] hover:bg-transparent hover:text-[#F5EEFC] transition-colors ease-in-out duration-300"'
                >
                  Show more
                </a>
              </Link>
            }
            key={'project3'}
          />
          <ProjectItem
            title={'Simple Blog with Authorization'}
            img={'/assets/blog_.png'}
            url={
              <Link href="/blog" passHref>
                <a
                  className='className=" bg-[#F5EEFC] text-txt-orange font-bold block w-28 py-1 mx-auto rounded-lg mt-2 border-2
         hover:border-2 hover:border-[#F5EEFC] hover:bg-transparent hover:text-[#F5EEFC] transition-colors ease-in-out duration-300"'
                >
                  Show more
                </a>
              </Link>
            }
            key={'project4'}
          />
          <ProjectItem
            title={'Simple Notes Reactjs'}
            img={'/assets/my-notess.png'}
            url={
              <Link href="/notes" passHref>
                <a
                  className='className=" bg-[#F5EEFC] text-txt-orange font-bold block w-28 py-1 mx-auto rounded-lg mt-2 border-2
             hover:border-2 hover:border-[#F5EEFC] hover:bg-transparent hover:text-[#F5EEFC] transition-colors ease-in-out duration-300"'
                >
                  Show more
                </a>
              </Link>
            }
            key={'project5'}
          />
          <ProjectItem
            title={'Simple Weather App'}
            img={'/assets/weather-app.png'}
            url={
              <Link href="/weather" passHref>
                <a
                  className='className=" bg-[#F5EEFC] text-txt-orange font-bold block w-28 py-1 mx-auto rounded-lg mt-2 border-2
             hover:border-2 hover:border-[#F5EEFC] hover:bg-transparent hover:text-[#F5EEFC] transition-colors ease-in-out duration-300"'
                >
                  Show more
                </a>
              </Link>
            }
            key={'project6'}
          />
        </div>
      </div>
    </section>
  );
}
