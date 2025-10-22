/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fafafa",
        text: "#475467",
        surface: "#ffffff",
        border: "#e5e5e5",
        textSecondary: "#A3A3A3",
        accent: "#dfd6f8da",
        secondary: "#ffffff",
        primary: "#7F56D9",
        success: "#22c55e",
        warning: "#f59e0b",
        error: "#ef4444",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
      },
      boxShadow: {
        'subtle': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'interactive': '0 0 0 4px rgba(217, 45, 32, 0.1)',
      }
    },
  },
  plugins: [],
}