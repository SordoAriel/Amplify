/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scaleY(1)", opacity: 1 },
          "50%": { transform: "scaleY(2)", opacity: 0.7 },
        },
        'keyframes-svg-filled': {
          '0%': { transform: 'scale(0)' },
          '25%': { transform: 'scale(1.2)' },
          '50%': { transform: 'scale(1)', filter: 'brightness(1.5)' },
        },
        'keyframes-svg-celebrate': {
          '0%': { transform: 'scale(0)' },
          '50%': { opacity: 1, filter: 'brightness(1.5)' },
          '100%': { transform: 'scale(1.4)', opacity: 0, display: 'none' },
        },

      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        heartbeat: "heartbeat 1s ease-in-out infinite",
        'svg-filled': 'keyframes-svg-filled 1s',
        'svg-celebrate': 'keyframes-svg-celebrate .5s forwards',
      },
      colors: {
        'heart-color': 'rgb(255, 91, 137)',
      },

    },
  },
  plugins: [],
};
