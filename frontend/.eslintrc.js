module.exports = {
  extends: '@igoradamenko',
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'config/webpack.config.js',
      },
    },
  },
};
