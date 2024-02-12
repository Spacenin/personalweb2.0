/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js, jsx}"],
  theme: { 
    extend: {
      colors: {
        "custom-grey": "#335C67",
        "custom-beige": "#FFF3B0",
        "custom-beige2": "#BFB684",
        "custom-hover-nav": "#427987"
      }
    },
  },
  plugins: [],
}