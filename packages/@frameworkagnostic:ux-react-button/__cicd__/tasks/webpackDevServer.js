
const execa = require('execa');
const Listr = require('listr');

module.exports = {
	title: 'Launch webpack dev server',
	enabled: () => true,
	task: () => {
		const cmd =	execa.sync('node', [
			'node_modules/.bin/webpack-dev-server',
			'--config',
			'webpack-dev-server.config.js',
			'--progress',
			'--inline',
			'--colors',
		], {
			stdout: process.stdout,
			stderr: process.stderr,
		});
		return cmd;
	}
};
