/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        card: '#d9d9d9',
        income: '#11B00E',
        expense: '#C70707',
      },
    },
  },
  plugins: [],
}

