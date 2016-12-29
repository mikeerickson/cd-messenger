const bowser = require('bowser');

module.exports = (bowser.name !== '')
  ? require('./src/messenger-browser')
  : require('./src/messenger-node');
