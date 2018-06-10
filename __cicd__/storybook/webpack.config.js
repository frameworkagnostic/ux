
const path = require('path');
const R = require('ramda');
const kindOf = require('kind-of');

const { webpackBaseConfig } = require('../webpack-config/webpack-base.config.js');
const inspect = require('../inspect');
const webpackConfig = webpackBaseConfig();

module.exports = (baseConfig, env) => {
  baseConfig.module.rules = R.clone(webpackConfig.module.rules);

  webpackConfig.plugins.forEach((plugin) => {
    baseConfig.plugins.push(plugin);
  });

  baseConfig.resolve.modules.push(
    path.resolve(__dirname, '../../packages')
  );

  //inspect(baseConfig.module.rules);

  return baseConfig;
};
