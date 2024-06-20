/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      fontFamily:{
        "vazir":"Vazir"
      },
      colors:{
        orange:{
          base:"#FF7800",
        }
      }
    },
  },
  plugins: [],
}

