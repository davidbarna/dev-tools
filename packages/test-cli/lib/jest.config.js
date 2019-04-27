module.exports = {
  rootDir: process.cwd(),
  moduleFileExtensions: ["js", "jsx", "json", "node", "ts", "tsx"],
  setupFiles: [`${__dirname}/jest.setup.js`],
  testRegex: "(/__tests__/.*)\\.test\\.[jt]sx?$",
  transform: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|html)$": `${__dirname}/file-transformer.js`,
    "^.+\\.jsx?$": require.resolve("babel-jest"),
    "\\.tsx?$": require.resolve("ts-jest")
  },
  verbose: true,
  globals: {
    "ts-jest": {
      diagnostics: false
    }
  }
};
