import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';

export default function Imgproject({ urlImg, icon, title, desc, btn, tag }) {
  return (
    <main className="contain">
      <div
        className="relative after:absolute after:bg-gradient-to-t
        after:from-zinc-900 after:w-full after:h-full after:top-0 after:z-10 after:left-0 after:md:rounded-3xl"
      >
        <div className="w-full h-40 sm:h-48 object-cover">
          <Image
            src={urlImg}
            className=" md:rounded-3xl object-cover"
            layout="fill"
            width={1280}
            height={240}
            alt={'project'}
          />
        </div>
        <h3 className="absolute text-6xl -bottom-5 left-[10%] z-30">{icon}</h3>
      </div>
      <div className="my-20">
        <div className="px-5 sm:px-28 ">
          <div className="flex flex-col sm:flex-row justify-between">
            <div className=" sm:w-4/5">
              <h2 className="text-theme font-inter font-bold text-3xl mb-2">{title}</h2>
              <p className="text-theme sm:w-4/5">{desc}</p>
              <div className=" flex mt-7">{btn}</div>
            </div>
            <div className=" sm:w-1/5 mt-8 sm:mt-0">
              <h4 className="font-bold text-theme text-lg mb-2">Tech:</h4>
              {tag}
            </div>
          </div>
          <Link href="/" passhref>
            <a className="text-theme flex items-center hover:text-accent hover:border-b-2 my-20 hover:border-accent w-fit group">
              <span className="mr-2">
                <BsArrowLeft />
              </span>
              <span>Back</span>
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
}
