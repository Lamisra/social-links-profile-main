/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {


    extend: {
      colors:{
        Green: "hsl(75, 94%, 57%)",
        White: "hsl(0, 0%, 100%)",
        Grey: "hsl(0, 0%, 20%)",
        DarkGrey: "hsl(0, 0%, 12%)",
        OffBlack: "hsl(0, 0%, 8%)" 
      },

      fontFamily:{
        bodyFont: "Inter"
      },

      fontWeight: {
        normal: "400",
        medium : "600",
        bold : "700"
      }

    },
  },
  plugins: [],
}

