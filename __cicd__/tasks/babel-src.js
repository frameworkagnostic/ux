
const execa = require('execa');
const Listr = require('listr');
const logalot = require('logalot');
const path = require('path');

const src = path.join(__dirname, '../../packages/@frameworkagnostic:ux-react-button/src');
const dist = path.join(__dirname, '../../packages/@frameworkagnostic:ux-react-button/lib');

module.exports = {
	title: 'Transpile src folder to lib',
	enabled: () => true,
	task: () => {
		const cmd =	execa.sync('node', [
	    `./node_modules/.bin/babel`,
	    src,
	    `--out-dir`,
	    dist,
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
