const { inspect } = require('util');

module.exports = (obj) => {
  console.log(inspect(obj, {
    compact: true,
    depth: 5,
    breakLength: 80,
    showHidden: true
  }));
};
