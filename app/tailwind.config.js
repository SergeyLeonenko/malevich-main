/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        'main-color': 'var(--main-color)',
        'bg-color': 'var(--bg-color)',
      },
    },
  },
}

