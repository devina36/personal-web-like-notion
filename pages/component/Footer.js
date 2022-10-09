import Link from 'next/link';
import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

export default function Footer({ dis }) {
  return (
    <footer className={dis}>
      <div className="border-t-2 border-theme">
        <div className="contain my-4 flex flex-col sm:flex-row justify-between items-center">
          <h4 className="font-inter text-theme">Copyright {new Date().getFullYear()} Devina Amalia</h4>
          <div className="text-theme flex mt-2 sm:0">
            <a href="https://github.com/devina36" target="_blank" rel="noreferrer">
              <BsGithub size={30} className=" mr-3 hover:text-accent" />
            </a>
            <a href="https://www.linkedin.com/in/devina-amalia-arindi/" target="_blank" rel="noreferrer">
              <BsLinkedin size={30} className=" mr-3 hover:text-accent" />
            </a>
            <a href="https://www.instagram.com/dvn.humanbeing/" target="_blank" rel="noreferrer">
              <BsInstagram size={30} className=" hover:text-accent" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
