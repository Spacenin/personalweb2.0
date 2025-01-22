/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js, jsx}"],
  theme: { 
    extend: {
      colors: {
        "custom-header": "#2E3347",
        "custom-background": "#B38A71",
        "custom-folder": "#F3DCC3",
        "custom-hover-nav": "#5E6B8B",
        "custom-white": "#EDEEED",
        "custom-bite": "#32160D"
      }
    },
  },
  plugins: [],
}