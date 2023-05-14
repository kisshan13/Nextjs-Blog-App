/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#F2F2F2',
      black: '#2B2B2B'
    },

    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}
