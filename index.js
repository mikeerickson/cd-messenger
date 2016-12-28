var bowser = require('bowser');
let messenger;

if (bowser.name !== '') {
  // console.log(`Browser Detected: ${bowser.name} ${bowser.version}`);
  messenger = require('./src/messenger-browser');
}
else {
  messenger = require('./src/messenger-node');
}

module.exports = messenger;
