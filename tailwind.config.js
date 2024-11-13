/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'text-gradient': 'text-gradient 1.5s linear infinite',
        'border-width': 'border-width 3s infinite alternate'
      },
      keyframes: {
        'text-gradient': {
          to: {
            backgroundPosition: '200% center'
          }
        },
        'border-width': {
          from: { width: '10px', opacity: '0' },
          to: { width: '100px', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
};