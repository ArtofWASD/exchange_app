/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      spacing: {
        '128': '450px',
        '300': '730px'
      }
    },
  },
  plugins: [],
}
