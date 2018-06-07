
const execa = require('execa');
const Listr = require('listr');

module.exports = {
	title: 'Build webpack bundles',
	enabled: () => true,
	task: () => {
		const cmd =	execa.sync('node', ['node_modules/.bin/webpack'], {
			stdout: process.stdout,
			stderr: process.stderr,
		});
		return cmd;
	}
};
