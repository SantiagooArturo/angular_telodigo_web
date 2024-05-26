/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./pages/**/*.{html,ts}",
    "./components/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#222323',
        'secondary': '#A238FF',
      },
      backgroundImage: {
        'hero': "url('/assets/img/hero_bg.jpg')", // Referencia a la img de fondo
      },
      boxShadow: {
        'btn': '0px 0px 15px 0px rgba(162,56,255,0.75)',
        'card': '0px 0px 30px 0px rgba(0, 0, 0, 0.45)',
        'header': '0px 2px 25px 0px rgba(0, 0, 0, 0.75)',
      }
    },
  },
  plugins: [],
}