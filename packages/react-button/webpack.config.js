
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

//Loaders
const rules = [
  ...require('./__cicd__/webpack-loaders/jsx'),
  require('./__cicd__/webpack-loaders/css'),
  require('./__cicd__/webpack-loaders/scss'),
];

module.exports = {
  node: false,
  target: 'web',
  externals: [nodeExternals({
    whitelist: []
  })],
	entry: {
		'main': 'src/base-components/index.js',
	},
	output: {
    path: path.join(__dirname, `bundles/main`),
		filename: '[name].bundle.js',
		chunkFilename: '[id].chunk.js'
	},
  resolve: {
    extensions: ['.js', '.jsx' , '.scss'],
    modules: [path.resolve(__dirname), 'node_modules', '.'],
    alias: {}
  },
  plugins: [
    new webpack.DefinePlugin({
      BROWSER: true,
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production')
      }
    })
  ],
  module: {
    rules
  }
};
