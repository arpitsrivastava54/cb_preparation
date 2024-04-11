/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"rgba(221, 119, 53, 1)",
        bgPrimary:"rgba(221, 119, 53, 1)",
        headdingText:"rgb(57, 57, 57)",
      }
    },
  },
  plugins: [],
}

