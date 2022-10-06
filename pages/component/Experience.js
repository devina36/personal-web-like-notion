import React from 'react';
import { BsFillCaretRightFill } from 'react-icons/bs';

export default function Experience() {
  return (
    <section className="contain mb-28">
      <div className="px-5 sm:px-12 lg:px-28">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-2/6">
            <img src="/assets/cleanup-cuate.svg" className=" max-w-md lg:w-full mx-auto h-auto" alt="experience" />
          </div>
          <div className="w-full order-first lg:order-none lg:w-4/6 pl-0 lg:pl-14">
            <span className="title-section mb-10">
              <h2 className="text-theme font-inter font-bold text-2xl">Experience</h2>
            </span>
            <div className="mb-4">
              <h3 className="font-inter text-xl text-theme font-bold ">Engineer trainee</h3>
              <h4 className="font-inter text-theme">
                <span className=" text-red-500 italic">Icube by sirclo,</span> remote - (21/03/2022 - 20/09/2022)
              </h4>
              <p className="text-theme">
                Received coaching and support from peers and senior software engineer, and gained practical experience
                in using magento and reactjs (nextjs)
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-inter text-xl text-theme font-bold ">Web developer</h3>
              <h4 className="font-inter text-theme">
                <span className=" text-red-500 italic">PunyaLink,</span> remote - (06/01/2022 - 30/03/2022)
              </h4>
              <p className="text-theme">
                Translate static designs into interactive elements of web products and using programming languanges such
                as html, css, and javascript
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-inter text-xl text-theme font-bold ">Web developer</h3>
              <h4 className="font-inter text-base text-theme">
                <span className=" text-red-500 italic">State university of malang,</span> remote - (02/06/2020 -
                06/08/2020)
              </h4>
              <p className="text-theme">
                Provided effective troubleshooting and remediation for web applications. Worked well independently and
                within a team setting.
              </p>
            </div>
            <a href="https://drive.google.com/file/d/1mWrZ45lHuLeKdPO8ZMWrj9NKWsA69Ra4/view?usp=sharing">
              <h3 className="text-txt-orange flex items-center w-full py-2 px-2 bg-[#FDE8D2] hover:text-red-500 hover:cursor-pointer">
                <span className="mr-1">
                  <BsFillCaretRightFill />
                </span>
                Show more..
              </h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
