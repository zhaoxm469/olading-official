/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:["./src/**/**.vue"],
  content: [],
  theme: {
    extend: {
      animation:{
        "logo-move":"move linear infinite 10s"
      },
      keyframes:{
        move:{
          "to":{
            transform:"translateX(calc(-60%))"
          }
        }
      }
    },
  },
  plugins: [],
}
