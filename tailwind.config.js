/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
        'pulse': {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '.5'
          }
        }
      },
      animation: {
        'bounce-slow': 'bounce-slow 2s infinite',
        'pulse': 'pulse 1s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};