import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Ensure this matches your actual content files
  ],
  darkMode: "class", // Enables dark mode based on a class
  theme: {
    extend: {
      screens: {
        'xs': '320px', // Custom 'xs' breakpoint for mobile
      },
    },
    variants: {
      extend: {
          transitionProperty: ['clip-path']
      }
  },
  },
  plugins: [],
};

export default config;
