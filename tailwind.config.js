/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'gold-light': '#D4AF37',
        'gold': '#C5A028',
        'gold-dark': '#8B6914',
        'obsidian': '#0A0A0A',
        'charcoal': '#1A1A1A',
        'cream': '#FAF6F0',
        'cream-dark': '#F0E8DB',
        'muted': '#9B9B9B',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
