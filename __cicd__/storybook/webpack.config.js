
const path = require('path');
const R = require('ramda');
const kindOf = require('kind-of');
const webpack = require('webpack');
const { argv } = require('yargs');

const { webpackBaseConfig } = require('../webpack-config/webpack-base.config.js');
const inspect = require('../inspect');
const webpackConfig = webpackBaseConfig();

const cliConfig = require('yargs-parser')(argv._)

module.exports = (baseConfig, env) => {
  baseConfig.module.rules = R.clone(webpackConfig.module.rules);

  webpackConfig.plugins.forEach((plugin) => {
    baseConfig.plugins.push(plugin);
  });

  baseConfig.plugins.push(
    new webpack.DefinePlugin({
      'WEBPACK_CWD': JSON.stringify(cliConfig.cwd ? cliConfig.cwd : process.cwd())
    })
  )

  baseConfig.resolve.modules.push(
    path.resolve(__dirname, '../../packages')
  );

  //inspect(baseConfig.module.rules);

  return baseConfig;
};
