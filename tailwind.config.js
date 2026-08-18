/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          background: '#080D20',
          secondary: '#0E1630',
          card: '#111A35',
          cardLight: '#151F3D',
          blue: '#3155FF',
          brightBlue: '#4268FF',
          cyan: '#5CCBFF',
        },
        text: {
          main: '#F7F9FF',
          secondary: '#B8C1D9',
          muted: '#7F8AA8',
        },
        border: 'rgba(255,255,255,0.10)',
        grid: 'rgba(120,150,255,0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
