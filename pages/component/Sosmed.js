import Link from 'next/link';
import React from 'react';
import { GrInstagram, GrLinkedinOption, GrGithub } from 'react-icons/gr';

export default function Sosmed() {
  return (
    <label className="fixed invisible lg:visible w-full inset-y-1/2 -z-10">
      <div className="contain">
        <a href="https://github.com/devina36" target="_blank" rel="noreferrer">
          <div className="p-2 sosmed cursor-pointer ml-auto mr-4">
            <GrGithub size={25} className=" text-dark dark:text-white" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/devina-amalia-arindi/" target="_blank" rel="noreferrer">
          <div className="p-2 sosmed cursor-pointer ml-auto mr-4">
            <GrLinkedinOption size={25} className=" text-dark dark:text-white" />
          </div>
        </a>
        <a href="https://www.instagram.com/dvn.humanbeing/" target="_blank" rel="noreferrer">
          <div className="p-2 sosmed cursor-pointer ml-auto mr-4">
            <GrInstagram size={25} className=" text-dark dark:text-white" />
          </div>
        </a>
      </div>
    </label>
  );
}
