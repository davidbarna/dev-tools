const ERR = 2;

module.exports = {
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  env: {
    browser: true,
    node: true,
    "jest/globals": true
  },
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "@typescript-eslint", "jest"],
  rules: {
    "prettier/prettier": [ERR, require("@dal/prettier-config")]
  },
  settings: {
    "import/resolver": {
      typescript: {
        directory: "./node_modules/@dal/typescript-config"
      }
    }
  }
};
