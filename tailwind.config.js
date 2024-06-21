/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridAutoColumns: {
        '2fr': 'minmax(0, 2fr)',
      }
    }

  },
  plugins: [],
}

