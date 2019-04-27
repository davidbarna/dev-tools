const path = require("path");
const npxa = require("./utils/cli/npxa");

const inDir = "src";
const outDir = "dist";
const babelConfigPath = path.resolve(__dirname, "../babel.config.js");

const execute = async () => {
  await npxa("rimraf", [outDir]);
  await npxa("@babel/cli", [
    inDir,
    "--out-dir",
    outDir,
    "--config-file",
    babelConfigPath,
    "--extensions",
    ".js,.jsx,.ts,.tsx",
    "--ignore",
    "**/__tests__"
  ]);
};

execute();

module.exports = execute;
