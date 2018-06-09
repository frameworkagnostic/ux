#!/usr/bin/env node

const path = require('path');
const coverageThreshold = require('./base-coverage-threshold');

const CWD = process.env.JEST_RUNNER_CWD;

const jestConfig = {
  bail: false,
  testEnvironment: 'node',
  "setupFiles": [],
  "verbose": true,
  "testRegex": process.env.JEST_RUNNER_SPEC_REGEX,
  "transform": {
    "\\.js$": require.resolve('babel-jest'),
    "\\.jsx$": require.resolve('babel-jest'),
  },
  "transformIgnorePatterns": [
    "/node_modules/",
    "webpack.config.js"
  ],
  "moduleDirectories": [
    "node_modules",
    path.join(`${CWD}/src`),
    path.join(CWD),
  ],
  "rootDir": CWD,
  "collectCoverage": true,
  "coverageDirectory": process.env.JEST_RUNNER_COVERAGE_DIR,
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "webpack.config.js",
    ".spec.js",
    ".spec-csr.jsx",
    "/__tests__/",
    "/dist/",
    "/lib/",
    "/bundles/",
    "/test-results/",
    ".stories.js"
  ],
  "collectCoverageFrom": [
    "*.js",
    "**/*.js",
    "*.jsx",
    "**/*.jsx",
  ],
  "coverageReporters": [
    "text-summary",
    "text"
  ],
  "coverageThreshold": coverageThreshold
};

module.exports = jestConfig;
