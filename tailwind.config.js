/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#0D1B2A',       // Main page background
        prussian: '#1B263B',  // Background for cards, containers, navbar
        dusk: '#415A77',      // Accent borders, dividers, subtle active states
        lavender: '#778DA9',  // Secondary text, subtle highlights, badge borders
        alabaster: '#E0E1DD', // Primary text, major headings, bright highlights
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-dusk': '0 0 20px -2px rgba(65, 90, 119, 0.45)',
        'glow-lavender': '0 0 25px -4px rgba(119, 141, 169, 0.4)',
        'card-hover': '0 10px 30px -10px rgba(13, 27, 42, 0.8), 0 0 15px 0 rgba(65, 90, 119, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}

