
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const R = require('ramda');

const rules = [
  ...require('../webpack-loaders/jsx'),
  require('../webpack-loaders/css'),
  require('../webpack-loaders/scss'),
];

const webpackBaseConfig = () => {
  return {
    node: false,
    target: 'web',
    externals: [nodeExternals({
      whitelist: []
    })],
  	entry: () => {
      throw new Error('no defined entry provided');
    },
  	output: {
      path: () => {
        throw new Error('no defined output.path provided');
      },
  		filename: '[name].bundle.js',
  		chunkFilename: '[id].chunk.js'
  	},
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: () => {
        throw new Error('no defined resolve.modules provided');
      },
    },
    plugins: [],
    module: { rules: R.clone(rules) }
  };
};

module.exports = { webpackBaseConfig };
