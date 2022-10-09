import Image from 'next/image';
import React from 'react';

export default function Imgproject({ urlImg, icon }) {
  return (
    <section className="contain mb-28">
      <div className="relative">
        <div
          className="relative after:absolute after:bg-gradient-to-t
        after:from-zinc-900 after:w-full after:h-full after:top-0 after:z-10 after:left-0 after:md:rounded-3xl"
        >
          <div className="w-full h-40 sm:h-48 object-cover">
            <Image
              src={urlImg}
              className=" md:rounded-3xl object-cover"
              layout="fill"
              width={1440}
              height={240}
              alt={'project'}
            />
          </div>
        </div>
        <h3 className="absolute text-6xl -bottom-5 left-[10%] z-10">{icon}</h3>
      </div>
    </section>
  );
}
