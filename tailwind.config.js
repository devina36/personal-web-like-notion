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
        'tag-purple': 'rgba(103,36,222,.2)',
        'tag-gray': 'hsla(45,2%,60%,.4)',
        'tag-red': 'rgba(255,0,26,.2)',
        'tag-blue': 'rgba(0,120,223,.2)',
        'tag-yellow': 'rgba(233,168,0,.2)',
        'tag-green': 'rgba(0,135,107,.2)',
        accent: '#f7b36a',
        'btn-orange': '#3D313A',
        'txt-purple': '#9a6dd7',
        'txt-orange': '#FFA656',
        'txt-green': '#4dab9a',
        'txt-red': '#ff7369',
        'txt-yellow': '#ffdc49',
        'txt-blue': '#529cca',
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
