/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'blue-primary': 'hsla(194, 87%, 31%, 1)',
        'accent-green': 'hsla(126, 59%, 49%, 1)',
        'light-green': 'hsla(126, 62%, 60%, 1)',
        'deep-green': '#289E34',
        'light-blue': 'hsla(197, 53%, 51%, 1)',
        'light-gradient': 'hsla(191, 100%, 91%, 0.25)',
        'grey-bg': 'hsla(0, 3%, 94%, 1)'
      }
    }
  },
  plugins: []
}
