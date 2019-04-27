#!/usr/bin/env node

const relative = require('relative');
const execa = require('execa');

const JEST_BIN_PATH = relative(require.resolve('jest/bin/jest'));
const JEST_CONFIG_PATH = relative(require.resolve('../lib/jest.config.js'));

const [, , ...jestArgs] = process.argv;
const opts = { stdio: 'inherit', cwd: process.cwd(), shell: true };
const args = [...jestArgs, `-c=${JEST_CONFIG_PATH}`];

console.log(`> jest ${args.join(' ')}`); // eslint-disable-line no-console
execa(JEST_BIN_PATH, args, opts);
