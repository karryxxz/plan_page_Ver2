/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '40': '5rem',
        '56': '56px', // 56pxのマージン値を追加
        '55': '55px',
        '57': '57px',
        '57.5': '57.5px',
        '57.9': '57.9px',
        '58': '58px',
        '57.8': '57.8px'
      },
    },
  },
  plugins: [],
};