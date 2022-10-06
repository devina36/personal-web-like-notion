import React from 'react';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3, DiJavascript1, DiReact, DiMysql, DiCodeigniter } from 'react-icons/di';
import { SiTailwindcss, SiBootstrap, SiCodeigniter } from 'react-icons/si';

export default function Skill() {
  return (
    <section className="contain mb-28">
      <div className="px-5 sm:px-12 lg:px-28">
        <h2 className=" text-theme font-inter font-bold text-2xl border-b-[1px] pb-3">
          <span className="text-4xl">🏃‍♀️</span>
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-y-6 mt-10">
          <div className=" box place-self-start sm:place-self-auto">
            <AiOutlineHtml5 className=" w-14 h-14 text-theme mr-1" />
            <span className="tag tag-blue">html</span>
          </div>
          <div className=" box place-self-start sm:place-self-auto">
            <DiCss3 className=" w-14 h-14  text-theme mr-1" />
            <span className="tag tag-yellow">css</span>
          </div>
          <div className=" box place-self-end sm:place-self-auto">
            <DiJavascript1 className=" w-14 h-14 text-theme mr-1" />
            <span className="tag tag-red">javascript</span>
          </div>
          <div className=" box place-self-end sm:place-self-auto">
            <SiTailwindcss className=" w-14 h-14  text-theme mr-1" />
            <span className="tag tag-purple">tailwind</span>
          </div>
          <div className=" box place-self-start sm:place-self-auto">
            <DiReact className=" w-14 h-14  text-theme mr-1" />
            <span className="tag tag-gray">reactjs</span>
          </div>
          <div className=" box place-self-start sm:place-self-auto">
            <SiBootstrap className=" w-14 h-14  text-theme mr-1" />
            <span className="tag tag-purple">bootstrap</span>
          </div>
          <div className=" box place-self-end sm:place-self-auto">
            <DiCodeigniter className=" w-14 h-14  text-theme mr-1" />
            <span className="tag tag-green">codeigniter</span>
          </div>
          <div className=" box place-self-end sm:place-self-auto">
            <DiMysql className=" w-14 h-14  text-theme mr-1" />
            <span className="tag tag-red">myqsl</span>
          </div>
        </div>
      </div>
    </section>
  );
}
