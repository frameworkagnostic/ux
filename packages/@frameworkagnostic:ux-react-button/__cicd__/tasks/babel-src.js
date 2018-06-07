
const execa = require('execa');
const Listr = require('listr');
const logalot = require('logalot');

module.exports = {
	title: 'Transpile src folder to lib',
	enabled: () => true,
	task: () => {
		const cmd =	execa.sync('node', [
	    `./node_modules/.bin/babel`,
	    `./src`,
	    `--out-dir`,
	    `./lib`,
	    `--copy-files`,
	    `--ignore`,
	    `spec.,mock.`,
	  ], {
			stdout: process.stdout,
			stderr: process.stderr,
		});
		return cmd;
	}
};
