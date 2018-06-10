
const execa = require('execa');
const Listr = require('listr');
const del = require('del');
const logalot = require('logalot');
const path = require('path');
const fs = require('fs');

const searchIn = path.join(__dirname, '../../packages/');
const tasks = fs.readdirSync(searchIn)
.filter((relativePath) => {
	const absolutePath = path.resolve(searchIn, relativePath);
	return fs.statSync(absolutePath).isDirectory();
})
.map(relativePath => {
	const lib = path.join(__dirname, `../../packages/${relativePath}/lib`);
	const dist = path.join(__dirname, `../../packages/${relativePath}/dist`);
	const bundles = path.join(__dirname, `../../packages/${relativePath}/bundles`);

	return {
		title: `Cleanup (${relativePath}) build folders`,
		task: () => {
			try {
				del.sync([
					lib, dist, bundles
				]);
			} catch (error) {
				throw new Error(error)
			}
		}
	}
});

module.exports = {
	title: 'Cleanup build folders',
	enabled: () => true,
	task: () => {
		return new Listr(tasks, {concurrent: true});
	}
};
