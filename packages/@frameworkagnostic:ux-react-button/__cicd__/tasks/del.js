
const execa = require('execa');
const Listr = require('listr');
const del = require('del');
const logalot = require('logalot');

module.exports = {
	title: 'Cleanup build folders',
	enabled: () => true,
	task: () => {
		try {
			del.sync([
				'lib', 'dist', 'bundles'
			].map((p) => `${process.cwd()}/${p}`));
		} catch (error) {
			throw new Error(error)
		}
	}
};
