/*global require*/

if (process.browser) {
  let Browser = require('./src/messenger-browser');
  module.exports = new Browser(require('./package.json'));
}
else {
  module.exports = require('./src/messenger-node');
}
