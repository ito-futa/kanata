import type { Config } from "tailwindcss";

const config: Config = {
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
    },
  },
  plugins: [],
};
export default config;