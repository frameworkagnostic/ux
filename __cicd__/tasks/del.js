
const execa = require('execa');
const Listr = require('listr');
const del = require('del');
const logalot = require('logalot');
const path = require('path');

const lib = path.join(__dirname, '../../packages/@frameworkagnostic:ux-react-button/lib');
const dist = path.join(__dirname, '../../packages/@frameworkagnostic:ux-react-button/dist');
const bundles = path.join(__dirname, '../../packages/@frameworkagnostic:ux-react-button/bundles');

module.exports = {
	title: 'Cleanup build folders',
	enabled: () => true,
	task: () => {
		try {
			del.sync([
				lib, dist, bundles
			].map((p) => `${process.cwd()}/${p}`));
		} catch (error) {
			throw new Error(error)
		}
	}
};
