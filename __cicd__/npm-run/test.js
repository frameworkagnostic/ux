#!/usr/bin/env node

const Listr = require('listr');
const { argv } = require('yargs');

//Tasks
const npmTestNode = require('../tasks/npm-test-node');
const npmTestCsr = require('../tasks/npm-test-csr');

const executeTasks = [];

executeTasks.push(npmTestNode);

const tasks = new Listr(executeTasks);

tasks.run().catch(err => {
  console.error(err);
});
