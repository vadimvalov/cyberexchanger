/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // content: ["./node_modules/flowbite/**/*.js"] По документации.
  theme: {
    extend: {
      fontFamily: {
        'mont': ['Mont'],
    }
    },
  },
  plugins: [
    // require('flowbite/plugin')
]
};
