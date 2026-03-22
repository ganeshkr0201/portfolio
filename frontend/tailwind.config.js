/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05050f",
        primary: "#1d4ed8",
        accent: "#8b5cf6",
        neon: "#0ea5e9"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(14, 165, 233, 0.2), 0 0 20px rgba(139, 92, 246, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.6), 0 0 40px rgba(139, 92, 246, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
