/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      margin: {
        '-half-screen': '-50vw',
      },
    },
  },
  plugins: [],
}
