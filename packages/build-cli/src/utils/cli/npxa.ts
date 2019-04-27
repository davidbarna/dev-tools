const { resolve } = require("path");
const execa = require("execa");
const readPkgUp = require("read-pkg-up");
const execOptions = { stdio: "inherit", cwd: process.cwd() };

const resolveBin = async (pkgName: string) => {
  const mainPath = require.resolve(pkgName);
  const { pkg, path } = await readPkgUp({ cwd: mainPath });

  const binFile =
    typeof pkg.bin === "object" ? pkg.bin[Object.keys(pkg.bin)[0]] : pkg.bin;
  return resolve(path.replace("package.json", ""), binFile);
};

module.exports = async (pkgName: string, args: any[]) => {
  const binPath = await resolveBin(pkgName);
  console.log(pkgName, args.join(" "));
  return execa(binPath, args, execOptions);
};
