
const R = require('ramda');
const path = require('path');
const { webpackBaseConfig } = require('./__cicd__/webpack-config/webpack-base.config.js');
const { findProjectDirectory } = require('./__cicd__/find-project-directory');

const projects = findProjectDirectory().map((paths) => {
  return {
    entry: {
      main: [
        path.join(__dirname, `./packages/${paths.projectName}/index.webpack.js`)
      ]
    },
    output: {
      path: paths.bundles,
    },
    resolve: {
      modules: [paths.projectRootDir, 'node_modules', '.']
    }
  };
});

module.exports = projects.map((config) => {
  return R.mergeDeepWithKey((k, l, r) => {
    return k === 'values' ? R.concat(l, r) : r;
  }, webpackBaseConfig(), config);
});
