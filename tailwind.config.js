/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'black-50': 'rgba(4, 6, 21, 0.5)',
        'white-100': '#F9F9F9',
        'black-100': '#03070C',
        'blue-500': '#081827',
        'white-10': 'rgba(255, 255, 255, 0.1)',
        'blue-100': '#5FC2D9',
      },
    },
  },
  plugins: [],
}
