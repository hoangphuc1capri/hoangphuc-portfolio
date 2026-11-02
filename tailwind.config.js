/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      colors: {
        cyberDark: '#040806',
        iceGreen: '#E2F8EE',
        electricGreen: '#00DF82',
        emeraldMid: '#057A44',
        deepEmerald: '#032B18',
        neonMint: '#60FFAF',
        mintLight: '#A7F3D0',
      },
      animation: {
        'scroll': 'scroll 40s linear infinite',
        'spin-slow': 'spin 22s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.33%)' },
        }
      }
    },
  },
  plugins: [],
}
