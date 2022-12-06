module.exports = {
  printWidth: 80,
  proseWrap: 'never',
  singleQuote: true,
  trailingComma: 'none',
  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'preserve',
      },
    },
  ],
};
