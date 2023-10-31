/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      lightGray: '#D9D9D9',
      gray: '#37465B',
      darkGray: '#1F2C35',
      purple: '#726FFE',
      cyan: '#58FEE6',
      white: '#fff',
    },
    fontFamily: {
      barlow: ['Barlow Condensed', 'sans-serif'],
      openSans: ['Open Sans', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xlg: '1200px',
      xl: '1440px',
      '2xl': '1600px',
      '3xl': '1800px',
    },
    extend: {
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '30%': { translate: 'translateX(-50%)', opacity: '0.6' },
          '50%': { translate: 'translateX(-20%)', opacity: '0.8' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideRight: 'slideRight 0.35s 0.4s cubic-bezier(0.2, 0.35, 0.34, 1.08) forwards',
      },
    },
  },
  plugins: [],
};
