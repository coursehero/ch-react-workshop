module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  overrides: [
    {
      files: "**/*.scss",
      options: {
        singleQuote: false
      }
    }
  ]
}
