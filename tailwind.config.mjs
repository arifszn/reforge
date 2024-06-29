import CONFIG from './config';

/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rfprimary: CONFIG.theme.accentColor,
      },
    },
  },
  plugins: [],
};
