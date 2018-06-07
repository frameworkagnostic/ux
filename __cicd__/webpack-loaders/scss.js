
const path = require('path');
const R = require('ramda');

const cssLoaders = R.clone(require('./css'));
const inspect = require('../inspect');

const includePaths = [
  '.',
  path.resolve(__dirname, '../../'),
  path.resolve(__dirname, '../../node_modules/'),
];

Object.assign(cssLoaders, {
  test: /\.scss$/,
  exclude: [
    /node_modules/,
  ],
  include: includePaths,
});

cssLoaders.oneOf = cssLoaders.oneOf.map((loader) => {
  loader.use.push({
    loader: 'sass-loader',
    options: { includePaths }
  });
  return loader;
});

module.exports = cssLoaders;
