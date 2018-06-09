
const R = require('ramda');
const path = require('path');
const webpackBaseConfig = require('./__cicd__/webpack-config/webpack-base.config.js');

const lib = path.join(__dirname, '../../packages/@frameworkagnostic:ux-react-button/lib');
const dist = path.join(__dirname, '../../packages/@frameworkagnostic:ux-react-button/dist');
const bundles = path.join(__dirname, '../../packages/@frameworkagnostic:ux-react-button/bundles');

const buttons = {
  entry: {
    main: [
      path.join(__dirname, './packages/@frameworkagnostic:ux-react-button/index.webpack.js')
    ]
  },
  output: {
    path: path.join(__dirname, './packages/@frameworkagnostic:ux-react-button/bundles'),
  },
  resolve: {
    modules: [path.resolve(__dirname), 'node_modules', '.']
  }
};

module.exports = [
  buttons
].map((config) => {
  return R.mergeDeepWithKey((k, l, r) => {
    return k === 'values' ? R.concat(l, r) : r;
  }, webpackBaseConfig(), config);
});
