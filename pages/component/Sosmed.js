import Link from 'next/link';
import React from 'react';
import { GrInstagram, GrLinkedinOption, GrGithub } from 'react-icons/gr';

export default function Sosmed() {
  return (
    <label className="fixed inset-y-1/2 right-[10%]">
      <Link href="https://github.com/devina36" passHref>
        <div className="p-2 sosmed">
          <GrGithub className="w-5 h-5 cursor-pointer text-dark dark:text-white" />
        </div>
      </Link>
      <Link href="https://www.linkedin.com/in/devina-amalia-arindi/" passHref>
        <div className="p-2 sosmed">
          <GrLinkedinOption className="w-5 h-5 cursor-pointer text-dark dark:text-white" />
        </div>
      </Link>
      <Link href="https://www.instagram.com/dvn.humanbeing/" passHref>
        <div className="p-2 sosmed">
          <GrInstagram className="w-5 h-5 cursor-pointer text-dark dark:text-white" />
        </div>
      </Link>
    </label>
  );
}
