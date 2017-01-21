const chalk  = require('chalk');
const family = require('../data/family.json');
let msg = require('../index.js');

msg.table(family);
