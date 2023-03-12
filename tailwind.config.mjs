import rewindr from './rewindr.config';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: rewindr.themeColor,
      },
    },
  },
  plugins: [],
};
