/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bubble-blue': '#40517F',
        'bubble-pink': '#A27A92',
        dark: '#303437',
        'txt-dark': '#373530;',
        'tag-purple': 'rgba(105, 64, 165, 0.3)',
        'tag-gray': 'rgba(143, 142, 138, 0.5)',
        'tag-red': 'rgba(225, 70, 70, 0.3)',
        'tag-blue': 'rgba(11, 110, 153, 0.3)',
        'tag-yellow': 'rgba(223, 172, 3, 0.3)',
        accent: '#f7b36a',
      },
      keyframes: {
        roll: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(50%)' },
        },
        scale: {
          '0, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.9)' },
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        roll: 'roll 4s ease-in-out infinite',
        scale: 'scale 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
