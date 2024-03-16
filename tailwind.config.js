/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // JITモードを明示的に有効にする
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accessible: 'var(--accessible-color)',
        white: 'var(--white-color)',
        lightgrey: 'var(--lightgrey-color)',
        grey: 'var(--grey-color)',
        black: 'var(--black-color)',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      keyframes: {
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fadein-500': 'fadein 0.5s ease-in',
        'fadein-1000': 'fadein 1s ease-in',
        'fadein-1500': 'fadein 1.5s ease-in',
        'fadein-2000': 'fadein 2.0s ease-in',
        'fadein-2500': 'fadein 2.5s ease-in',
        'fadein-3000': 'fadein 3.0s ease-in',
        'fadein-3500': 'fadein 3.5s ease-in',
        'fadein-4000': 'fadein 4s ease-in',
        'fadein-4500': 'fadein 4.5s ease-in',
        'fadein-5000': 'fadein 5.0s ease-in',
        'fadein-5500': 'fadein 5.5s ease-in',
        'fadein-6000': 'fadein 6.0s ease-in',
      },

    },
  },
  plugins: [],
};
