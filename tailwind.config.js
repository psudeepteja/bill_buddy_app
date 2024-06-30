/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mixedColor': 'linear-gradient(90deg, rgba(245, 156, 30, 1), rgba(211, 50, 29, 1))',
      },
      colors:{
        'mixedColors': 'linear-gradient(90deg, rgba(245, 156, 30, 1), rgba(211, 50, 29, 1))',
      }

    },
  },
  plugins: [],
};
