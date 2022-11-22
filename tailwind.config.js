const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-ma)', ...fontFamily.sans],
        sans: ['var(--font-ma)', ...fontFamily.sans]
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'light-blue': '#1A5AFF',
      'dark-blue': '#100E6A', // night sky theme
      'dark-grey': '#2E2E2E',
      'red': '#E41F1F',
      'green': '#38D900',
      'flash-yellow': '#FFBE18'
    },
  },
  plugins: [],
  darkMode: 'class'
}
