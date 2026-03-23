/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        primary: "#2563eb",
        accent: "#6366f1",
        neon: "#38bdf8"
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(56, 189, 248, 0.1), 0 0 20px rgba(99, 102, 241, 0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(56, 189, 248, 0.3), 0 0 40px rgba(99, 102, 241, 0.3)' },
        }
      }
    },
  },
  plugins: [],
}
