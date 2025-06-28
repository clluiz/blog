module.exports = {
  content: ["./src/**/*.{html,js,md,liquid}"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}