/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/**/*.html', './static/**/*.{html,js}', './content/**/*.md'],
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
