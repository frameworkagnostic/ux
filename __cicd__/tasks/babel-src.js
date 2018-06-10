
const execa = require('execa');
const Listr = require('listr');
const logalot = require('logalot');
const path = require('path');
const fs = require('fs');

const testFolder = './tests/';
const src = path.join(__dirname, '../../packages/@frameworkagnostic:ux-react-button/src');
const dist = path.join(__dirname, '../../packages/@frameworkagnostic:ux-react-button/lib');

const searchIn = path.join(__dirname, '../../packages/');
const tasks = fs.readdirSync(searchIn)
.filter((relativePath) => {
	const absolutePath = path.resolve(searchIn, relativePath);
	return fs.statSync(absolutePath).isDirectory();
})
.map(relativePath => {
	const src = path.join(__dirname, `../../packages/${relativePath}/src`);
	const dist = path.join(__dirname, `../../packages/${relativePath}/lib`);
	return {
		title: `Transpile (${relativePath}) src folder to lib`,
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
	}
});

module.exports = {
	title: 'Transpile src folder to lib',
	enabled: () => true,
	task: () => {
		return new Listr(tasks, {concurrent: true});
	}
};
