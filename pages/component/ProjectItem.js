import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectItem({ title, img, url }) {
  return (
    <div className="w-full relative shadow rounded-3xl">
      <div className=" h-8 w-full bg-orange-50 flex items-center px-4 rounded-t-3xl">
        <div className=" w-3 h-3 rounded-full bg-tag-red mr-1"></div>
        <div className=" w-3 h-3 rounded-full bg-tag-yellow  mr-1"></div>
        <div className=" w-3 h-3 rounded-full bg-tag-blue"></div>
      </div>
      <div className="aspect-video w-full">
        <Image
          src={img}
          className="rounded-b-3xl object-cover"
          width={500}
          height={300}
          layout="responsive"
          alt={'personal-web'}
        />
      </div>
      <div
        className="absolute w-full h-full bg-gradient-to-t from-zinc-900 
        rounded-3xl top-0 opacity-0 hover:opacity-100 transition-all ease-in-out duration-500"
      >
        <div className="px-3 w-full h-full grid place-content-center text-center">
          <h3 className=" font-inter text-lg font-bold text-white">{title}</h3>
          <Link href={url} scroll={true} passHref>
            <a
              className='className=" bg-[#F5EEFC] text-txt-orange font-bold block w-28 py-1 mx-auto rounded-lg mt-2 border-2
            hover:border-2 hover:border-[#F5EEFC] hover:bg-transparent hover:text-[#F5EEFC] transition-colors ease-in-out duration-300"'
            >
              Show more
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
