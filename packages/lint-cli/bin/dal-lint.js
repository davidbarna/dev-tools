#!/usr/bin/env node

const relative = require('relative');
const execa = require('execa');

const ESLINT_BIN_PATH = relative(require.resolve('eslint/bin/eslint'));
const ESINT_CONFIG_PATH = relative(
  require.resolve('@dal/eslint-config/eslintrc.js'),
);

const [, , ...eslintArgs] = process.argv;
const opts = { stdio: 'inherit', cwd: process.cwd() };
const args = [
  ...eslintArgs,
  '--ext=js,jsx,ts,tsx',
  `-c=${ESINT_CONFIG_PATH}`,
  `--no-eslintrc`, // Avoid overrides
];

console.log(`> eslint ${args.join(' ')}`); // eslint-disable-line no-console
execa(ESLINT_BIN_PATH, args, opts);
