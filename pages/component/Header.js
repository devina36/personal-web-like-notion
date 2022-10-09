import React from 'react';
import Theme from '../Theme';

export default function Header() {
  return (
    <header className=" bg-dark/40 dark:bg-white/40 backdrop-blur-md sticky top-0 z-30">
      <div className="contain">
        <div className="flex justify-between items-center px-5 py-3">
          <h2 className="text-theme">Hi, There 👋</h2>
          <Theme />
        </div>
      </div>
    </header>
  );
}
