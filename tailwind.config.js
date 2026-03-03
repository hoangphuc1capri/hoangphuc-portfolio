/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // <--- THÊM DÒNG NÀY QUAN TRỌNG
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'scroll': 'scroll 40s linear infinite', // Chỉnh số 40s thành 20s nếu muốn chạy nhanh hơn
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.33%)' }, // Dịch chuyển 1/3 vì mình nhân 3 danh sách
        }
      }

    },
  },
  plugins: [],
}