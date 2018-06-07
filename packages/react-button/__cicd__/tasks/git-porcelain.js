
const execa = require('execa');
const Listr = require('listr');

module.exports = {
	title: 'Git Status:Clean',
	task: () => {
		return new Listr([
			{
				title: 'Checking git status',
				task: () => execa.stdout('git', ['status', '--porcelain']).then(result => {
					if (result !== '') {
						throw new Error('Unclean working tree. Commit or stash changes first.');
					}
				})
			},
			{
				title: 'Checking remote history',
				task: () => execa.stdout('git', ['rev-list', '--count', '--left-only', '@{u}...HEAD']).then(result => {
					if (result !== '0') {
						throw new Error('Remote history differ. Please pull changes.');
					}
				})
			}
		], {concurrent: true});
	}
};
