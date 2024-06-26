import CONFIG from './config';

/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: true,
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: CONFIG.theme.accentColor,
      },
    },
  },
  plugins: [],
};
