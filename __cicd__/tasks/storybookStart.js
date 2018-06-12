
const execa = require('execa');
const Listr = require('listr');
const path = require('path');

module.exports = {
	title: 'Launch webpack dev server',
	enabled: () => true,
	task: () => {
		const cmd =	execa.sync('node', [
			'node_modules/.bin/start-storybook',
			'-c',
			'./__cicd__/storybook',
			'-p',
			'5009',
			'--',
			'--cwd',
			process.cwd(),
		], {
			cwd: path.join(__dirname, '../../'),
			stdout: process.stdout,
			stderr: process.stderr,
		});
		return cmd;
	}
};
