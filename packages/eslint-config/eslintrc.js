const prettierOptions = require('@dal/prettier-config');

const ERR = 2;
const OFF = 0;

module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint', 'jest'],
  rules: {
    'prettier/prettier': [ERR, prettierOptions],
    '@typescript-eslint/no-var-requires': OFF,
  },
  settings: {
    'import/resolver': {
      typescript: {
        directory: './node_modules/@dal/typescript-config',
      },
    },
  },
};
