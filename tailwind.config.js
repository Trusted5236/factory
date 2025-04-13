import { transform } from 'motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spinOnce: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spinOnce: 'spinOnce 1s linear 1',
      },

      colors:{
        yelloGreen: "#387F39"
      },

      keyframes:{
        flip:{
          '0%': { transform: 'rotateX(0deg)', opacity: '1' },
          '50%': { transform: 'rotateX(-90deg)', opacity: '1' },
        },

        slideIn:{
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },

        wave: {
          '0%': { transform: 'skewX(0deg) translateX(0)' },
          '25%': { transform: 'skewX(10deg) translateX(5px)' },
          '50%': { transform: 'skewX(-10deg) translateX(-5px)' },
          '75%': { transform: 'skewX(10deg) translateX(5px)' },
          '100%': { transform: 'skewX(0deg) translateX(0)' },
          '0%': { transform: 'translateX(100%)', opacity: '1' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },

        straight:{
          '0%': { backgroundColor: 'black' },
          '100%': { backgroundColor: 'black' },
        }

      },

      animation:{
        slideIn: "slideIn 2s ease-out",
        flip:"flip 4s ease-in-out",
        wave: 'wave 4s ease-in-out',
        straight:"straight 4s linear infinite",
      },

      fontFamily:{
        roboto: ["Sanchez", "serif"]
      }

    },
    },
  plugins: [],
}