/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        young: ['"Young Serif"', 'serif'],
        outfit: ["Outfit", 'sans-serif'], // Use quotes for font names with spaces
      },
    },
  },
  plugins: [],
}

