# lint CLI

CLI that wraps ESLint CLI.

## Usage

```js
// package.json
{
  "scripts": {
    "lint": "dal-lint ."
  }
}
```

You can also use it standalone with `npx`

```sh
npx @dal/lint . --fix
```

### Options

You can use all options from [eslint CLI](https://eslint.org/docs/user-guide/command-line-interface) but `--config` which is overriden.
