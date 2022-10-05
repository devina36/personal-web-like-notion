import React from 'react';
// import Link from 'next/link';

export default function ProjectItem({ title, img, href }) {
  return (
    <div className="w-full relative shadow rounded-3xl">
      <div className=" h-8 w-full bg-orange-50 flex items-center px-4 rounded-t-3xl">
        <div className=" w-3 h-3 rounded-full bg-tag-red mr-1"></div>
        <div className=" w-3 h-3 rounded-full bg-tag-yellow  mr-1"></div>
        <div className=" w-3 h-3 rounded-full bg-tag-blue"></div>
      </div>
      <img src={img} className="rounded-b-3xl w-full aspect-video object-cover" alt="personal-web" />
      <div
        className="absolute w-full h-full bg-gradient-to-t from-zinc-900 
        rounded-3xl top-0 opacity-0 hover:opacity-100 transition-all ease-in-out duration-500"
      >
        <div className="w-full h-full grid place-content-center text-center">
          <h3 className=" font-inter text-white">{title}</h3>
          <button href={href} className=" bg-slate-700 opacity-100 inline-block">
            go
          </button>
        </div>
      </div>
    </div>
  );
}
