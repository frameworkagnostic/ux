#!/usr/bin/env node

const Listr = require('listr');
const { argv } = require('yargs');

//Tasks
const eslint = require('../tasks/eslint');

const tasks = new Listr([
  eslint,
]);

tasks.run().catch(err => {
  console.error(err);
})
