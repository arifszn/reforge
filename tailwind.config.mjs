import CONFIG from './config';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: CONFIG.theme.accentColor,
      },
    },
  },
  plugins: [],
};
