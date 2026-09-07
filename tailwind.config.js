/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0c1128',
        'neon-blue': '#00f0ff',
        'neon-purple': '#b026ff',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        widest: '0.2em',
      },
      lineHeight: {
        tight: '1.1',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
}
