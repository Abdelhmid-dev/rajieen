/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'media',
  theme: {
    extend: {
      screens: {
        'xl-custom': '1100px',
      },
},
  },
  plugins: [],
}

