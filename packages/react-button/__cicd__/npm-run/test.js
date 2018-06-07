#!/usr/bin/env node

const Listr = require('listr');

//Tasks
const npmTestNode = require('../tasks/npm-test-node');
const npmTestCsr = require('../tasks/npm-test-csr');

const tasks = new Listr([
  npmTestNode,
  npmTestCsr,
]);

tasks.run().catch(err => {
  console.error(err);
});
