
const execa = require('execa');
const Listr = require('listr');
const logalot = require('logalot');
const path = require('path');
const fs = require('fs');

const findProjectDirectory = () => {
  const searchIn = path.join(__dirname, '../packages/');
  return fs.readdirSync(searchIn)
  .filter((relativePath) => {
  	const absolutePath = path.resolve(searchIn, relativePath);
  	return fs.statSync(absolutePath).isDirectory();
  })
  .map(relativePath => {
    const absolutePath = path.resolve(searchIn, relativePath);    
  	const src = path.join(searchIn, `${relativePath}/src`);
  	const dist = path.join(searchIn, `${relativePath}/lib`);
    const bundles = path.join(searchIn, `${relativePath}/bundles`);

  	return {
      absolutePath,
  		relativePath,
      src,
      dist,
      bundles,
      projectName: relativePath,
      projectRootDir: absolutePath,
  	}
  });
};

module.exports = {
  findProjectDirectory
};
