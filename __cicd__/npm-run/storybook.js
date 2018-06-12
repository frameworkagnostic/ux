#!/usr/bin/env node

const Listr = require('listr');

//Tasks
const storybookStart = require('../tasks/storybookStart');

const tasks = new Listr([
  storybookStart,
]);

tasks.run().catch(err => {
  console.error(err);
});
