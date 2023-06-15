/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'mont': ['Mont'],
    }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
};
