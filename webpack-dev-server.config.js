const webpack = require('webpack');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config');
const pkg = require('./package.json');

delete config.node;
delete config.target;
delete config.externals;

Object.assign(config, {
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].js',
  },
  entry: {
    main: [
      'webpack/hot/only-dev-server',
      '__cicd__/webpack-dev-server/react-app-shell.js',
    ],
  },
  devServer: {
    hot: true,
    inline: true,
    port: 5000,
    host: 'localhost',
    clientLogLevel: "error", //none, error, warning or info
    compress: false,
    contentBase: [
      path.join(__dirname, '__mocks__'),
      path.join(__dirname, '__cicd__/webpack-dev-server/public'),
      path.join(__dirname, 'node_modules/react/umd'),
      path.join(__dirname, 'node_modules/react-dom/umd'),
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './__cicd__/webpack-dev-server/react-app-shell.html'),
      title: pkg.name
    }),
  ],
  module: {
    rules: config.module.rules,
  },
});

module.exports = config;
