/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./exchange.html", "./src/**/*.{js,ts,jsx,tsx}"], // content: ["./node_modules/flowbite/**/*.js"] По документации.
  theme: {
    extend: {
      fontFamily: {
        mont: ["Mont", "sans-serif"],
      },
    },
    plugins: [],
  },
};
