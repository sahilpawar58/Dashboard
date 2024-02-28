/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/*.{jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        skincol: '#FDF5E6',
      }
    },
  },
  plugins: [],
}

