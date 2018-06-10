
const execa = require('execa');
const Listr = require('listr');
const path = require('path');
const { argv } = require('yargs');

const getEnv = (key, value) => process.env[key] == null ? value : process.env[key];

const pushConfig = (condition, args, value) => {
  if(condition) args.push(value);
  return pushConfig;
}

process.env.JEST_RUNNER_COVERAGE_DIR = getEnv('JEST_RUNNER_COVERAGE_DIR', "test-results/reports/jest-coverage");
process.env.JEST_RUNNER_SPEC_REGEX = getEnv('JEST_RUNNER_SPEC_REGEX', `(.*)\.spec-csr\.jsx?$`);
process.env.NODE_ENV = getEnv('NODE_ENV', 'test');
process.env.JEST_RUNNER_CWD = getEnv('JEST_RUNNER_CWD ', process.cwd().replace(/\\/g, '\/'));
process.env.JEST_RUNNER_COVERAGE = getEnv('JEST_RUNNER_COVERAGE', true);
process.env.JEST_RUNNER_NOCACHE = getEnv('JEST_RUNNER_NOCACHE', true);

const getCwd = () => process.env.JEST_RUNNER_CWD;
const getArgs = () => ['', process.env.JEST_RUNNER_SPEC_REGEX];

const cliRun = (cliArgs , cliCwd) => {
  const jestArgs = cliArgs || getArgs();
  const jestCwd = cliCwd || getCwd();

  pushConfig(process.env.JEST_RUNNER_COVERAGE, jestArgs, '--coverage');
  pushConfig(process.env.JEST_RUNNER_NOCACHE, jestArgs, '--no-cache');

  return require('jest-cli/build/cli').run(jestArgs, jestCwd);
};

const args = getArgs();

args.push('--config', path.join(__dirname, '../jest-config/csr-runner.js'));

if(argv.debug) {
  args.push('--debug');
}

args.push('--updateSnapshot');

module.exports = {
	title: 'Run Jest JSDOM tests',
	task: () => cliRun(args, getCwd())
};
