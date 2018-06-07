
const execa = require('execa');
const Listr = require('listr');

module.exports = {
	title: 'Install package dependencies with npm',
	enabled: ctx => ctx.yarn === false,
	task: () => execa('npm', ['install'])
};
