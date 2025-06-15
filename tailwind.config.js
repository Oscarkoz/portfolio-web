/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",     // <-- Lägg till denna!
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',           // <-- Viktigt för att dark mode ska aktiveras via .dark
  theme: {
    extend: {},
  },
  plugins: [],
}
