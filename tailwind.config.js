/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {colors: {
      olive: 'rgb(40, 54, 24)',
      lightOlive: 'rgb(96, 108, 56)',
      goldenbrown: 'rgb(188, 108, 37)',
      lightGoldenbrown: 'rgb(221, 161, 94)',
    },
    fontFamily: {
      sans: ['Bai Jamjuree', 'sans-serif'],
    },
},
  },
  plugins: [],
}
