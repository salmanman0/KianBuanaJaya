/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Poppins', 'serif'],
      },
    },
  },
  plugins: [],
}

