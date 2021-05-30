module.exports = {
  purge: {
    enabled: true,
    content: [
      '**/*.html',
      '**/*.scss',
      '**/*.ts'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      boxShadow: ['active'],
    },
  },
  plugins: [],
}
