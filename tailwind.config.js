/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,mdx}', './posts/**/*.{tsx,mdx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          main: 'var(--ifm-color-primary)',
          dark: 'var(--ifm-color-primary-dark)',
          darker: 'var(--ifm-color-primary-darker)',
          darkest: 'var(--ifm-color-primary-darkest)',
          light: 'var(--ifm-color-primary-light)',
          lighter: 'var(--ifm-color-primary-lighter)',
          lightest: 'var(--ifm-color-primary-lightest)',
        },
        dark: {
          main: '#24292e',
          deep: '#1f2428',
        },
        light: {
          main: '#f3f3f3',
          deep: '#ffffff',
          dim: '#e8ebef',
        },
        black: '#000000',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
