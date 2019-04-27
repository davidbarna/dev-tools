/* eslint-disable global-require */
module.exports = (api) => {
  api.assertVersion(7);

  return {
    presets: [
      [require('@babel/preset-env'), {}],
      require('@babel/preset-typescript'),
      require('@babel/preset-react'),
    ],
    plugins: [
      require('@babel/plugin-proposal-class-properties'),
      require('@babel/plugin-syntax-dynamic-import'),
      require('@babel/plugin-transform-runtime'),
    ],
  };
};
