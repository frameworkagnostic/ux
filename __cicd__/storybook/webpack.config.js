
const path = require('path');
const R = require('ramda');
const kindOf = require('kind-of');

const inspect = require('../inspect');
const webpackConfig = require('../../webpack.config');

module.exports = (baseConfig, env) => {
  baseConfig.module.rules = R.clone(webpackConfig.module.rules);

  webpackConfig.plugins.forEach((plugin) => {
    baseConfig.plugins.push(plugin);
  });

  baseConfig.resolve.modules = [
    path.resolve(__dirname, '../../'),
    path.resolve(__dirname, '../../node_modules'),
  ];

  //inspect(baseConfig.module.rules);

  return baseConfig;
};
