/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bricolage: ["Bricolage Grotesque", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        primary: "#2FB95D",
        secondary: "#043A3A",
        pale: "#525252",
      },
      screens: {
        "hp360": "360px",
        "hp375": "375px", 
        "hp425": "425px",
      },
    },
  },
  plugins: [],
};