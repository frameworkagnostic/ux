#!/usr/bin/env node

const Listr = require('listr');
const { argv } = require('yargs');

//Tasks
const babelSrcTask = require('../tasks/babel-src');
const delTask = require('../tasks/del');
const webpackDevServer = require('../tasks/webpackDevServer');
const webpackTask = require('../tasks/webpack');

const tasks = new Listr([
  delTask,
  babelSrcTask,
  argv.devServer ? webpackDevServer : webpackTask,
]);

tasks.run().catch(err => {
  console.error(err);
})
