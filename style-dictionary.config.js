module.exports = {
  source: ['token/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'src/styles/',
      files: [
        {
          destination: '_tokens.scss',
          format: 'css/variables',
          options: {
            outputReferences: true,
            selector: ':root',
          },
        },
      ],
    },
  },
};
