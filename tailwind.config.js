/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-main": "#652533",
        "primary-light": "#383741",
        "secondary-light": "#ededed",
        "red-main": "#b92c2e",
        "green-main": "#d8d0a4",
        "green-dark": "#c4ba91",
      },
    },
  },
  plugins: [],
};
