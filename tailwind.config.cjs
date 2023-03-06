// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        fm: {
          primary: '#A445ED',
          secondary: '#FF5252',
          gray: {
            50: '#F4F4F4',
            100: '#E9E9E9',
            500: '#757575',
            600: '#3A3A3A',
            700: '#2D2D2D',
            800: '#1F1F1F',
            900: '#050505',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Lora', ...defaultTheme.fontFamily.serif],
        mono: ['Inconsolata', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};

module.exports = config;
