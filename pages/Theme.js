import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { BsBrightnessHigh, BsMoonStars } from 'react-icons/bs';

export default function Theme() {
  const [dark, setDark] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setDark(true), []);
  if (!dark) return null;

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? (
        <BsMoonStars className="text-white focus:outline-none w-5 h-5 transition-all ease-in-out duration-500 hover:-rotate-90" />
      ) : (
        <BsBrightnessHigh className=" text-dark focus:outline-none w-5 h-5 transition-all ease-in-out duration-500 hover:rotate-90" />
      )}
    </button>
  );
}
