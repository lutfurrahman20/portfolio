/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      translate :{
        "-5" : "-5px",

      },
      colors: {
        lightNavy : "#112240" ,
        navy: "#0a192f",
        lightestNavy : "#233554",
        mountainShadowBlue: '#101357',
        softMountainBlue: '#131743', // Custom color define
        brightGreen : '#10B981',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

