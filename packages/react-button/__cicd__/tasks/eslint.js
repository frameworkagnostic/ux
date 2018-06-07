const execa = require('execa');
const Listr = require('listr');
const logalot = require('logalot');
const { argv } = require('yargs');

const args = [
  `./node_modules/.bin/eslint`,
  `--ext`,
  `js,jsx`,
  `.`,
];

if(argv.debug) {
  args.push('--debug');
}

module.exports = {
	title: 'Run eslint',
	enabled: () => true,
	task: () => {
		const cmd =	execa.sync('node', args, {
			stdout: process.stdout,
			stderr: process.stderr,
		});
		return cmd;
	}
};
