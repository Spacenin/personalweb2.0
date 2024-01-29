/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js, jsx}"],
  theme: { 
    extend: {
      colors: {
        "custom-grey": "#335C67",
        "custom-beige": "#FFF3B0",
        "custom-orange": "#E09F3E",
        "custom-red": "9E2A2B",
        "custom-darkred": "#540B0E",
        "custom-hover-nav": "#427987"
      }
    },
  },
  plugins: [],
}