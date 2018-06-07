
const { argv } = require('yargs');

const threshold = String(argv.coverageThreshold) ?
  Number(argv.coverageThreshold) : 100;

module.exports = {
  "global": {
    "branches": threshold,
    "functions": threshold,
    "lines": threshold,
    "statements": threshold
  }
};
