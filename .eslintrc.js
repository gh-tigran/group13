module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-use-before-define': [0],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': [2, { forbid: [] }],
    'react/static-property-placement': [0],
  },
};
