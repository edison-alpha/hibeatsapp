/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0a0a0a',
        accent: '#D5FD4C',
        'accent-hover': '#C5E03C',
      },
      fontFamily: {
        sans: ['Clash Display', 'sans-serif'],
        display: ['Clash Display', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/background.png')",
      },
    },
  },
  plugins: [],
}
