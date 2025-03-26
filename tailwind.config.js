/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        textblack: "#212529",
        primaryBlue: "#3033E9",
        primaryGray: "#464646"
      },
      fontFamily:{
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

