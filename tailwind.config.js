/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2FB95D",
        secondary : "#043A3A",
        pale: "#525252",
      },
    },
  },
  plugins: [],
}