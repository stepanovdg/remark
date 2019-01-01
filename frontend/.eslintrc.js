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
  rules: {
    'react/no-unused-prop-types': 'off', // eslint-plugin-react cant check preact's props properly
  }
};
