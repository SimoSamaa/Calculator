/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--clr-bg)',
        other: 'var(--clr-other)',
        num: 'var(--clr-num)',
        operation: 'var(--clr-operation)',
      }
    },
  },
  plugins: [],
}

