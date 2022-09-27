import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Theme() {
  const [dark, setDark] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setDark(true), []);
  if (!dark) return null;

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? (
        <FontAwesomeIcon icon={faMoon} className="text-blue-500 w-5 h-5" />
      ) : (
        <FontAwesomeIcon icon={faSun} className="text-blue-400 w-5 h-5" />
      )}
    </button>
  );
}
