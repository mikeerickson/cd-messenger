const bowser  = require('bowser');
const pkgInfo = require('./package.json');
const Browser = require('./src/messenger-browser');
// const Node     = require('./src/messenger'); // including this is throwing an error (think it is chalkline)

module.exports = (bowser.name !== '')
  ? new Browser(pkgInfo)
  : require('./src/messenger-node');
