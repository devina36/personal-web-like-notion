import React from 'react';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3, DiJavascript1, DiReact, DiMysql, DiCodeigniter } from 'react-icons/di';
import { SiTailwindcss, SiBootstrap, SiCodeigniter } from 'react-icons/si';

export default function Skill() {
  return (
    <section className="contain mb-20">
      <div className=" px-28">
        <h2 className=" text-theme font-inter font-bold text-2xl border-b-[1px] pb-3">
          <span className="text-4xl">🏃‍♀️</span>
          Skills
        </h2>
        <div className="grid grid-cols-4 place-items-center gap-y-6 mt-10">
          <div className=" box">
            <AiOutlineHtml5 className=" w-14 h-14 text-theme mr-1" />
            <span className="px-1 bg-tag-blue text-sm text-theme">html</span>
          </div>
          <div className=" box">
            <DiCss3 className=" w-14 h-14  text-theme mr-1" />
            <span className="px-1 bg-tag-yellow text-sm text-theme">css</span>
          </div>
          <div className=" box">
            <DiJavascript1 className=" w-14 h-14  text-theme mr-1" />
            <span className="px-1 bg-tag-red text-sm text-theme">javascript</span>
          </div>
          <div className=" box">
            <SiTailwindcss className=" w-14 h-14  text-theme mr-1" />
            <span className="px-1 bg-tag-purple text-sm text-theme">tailwind</span>
          </div>
          <div className=" box">
            <DiReact className=" w-14 h-14  text-theme mr-1" />
            <span className="px-1 bg-tag-gray text-sm text-theme">reactjs</span>
          </div>
          <div className=" box">
            <SiBootstrap className=" w-14 h-14  text-theme mr-1" />
            <span className="px-1 bg-tag-purple text-sm text-theme">bootstrap</span>
          </div>
          <div className=" box">
            <DiCodeigniter className=" w-14 h-14  text-theme mr-1" />
            <span className="px-1 bg-tag-blue text-sm text-theme">codeigniter</span>
          </div>
          <div className=" box">
            <DiMysql className=" w-14 h-14  text-theme mr-1" />
            <span className="px-1 bg-tag-red text-sm text-theme">myqsl</span>
          </div>
        </div>
      </div>
    </section>
  );
}
