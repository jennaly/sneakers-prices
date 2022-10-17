/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{ejs,js}"],
  theme: {
    extend: {
      fontFamily: {
        'rampart-one': ['Rampart One', 'cursive']
      },
    },
  },
  plugins: [require("daisyui")],
 
 
}

