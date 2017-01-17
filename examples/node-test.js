const chalk = require('chalk');

let data = [
  {fname: 'Mike', lname: 'Erickson'},
  {fname: 'Kira', lname: 'Erickson'},
  {fname: 'Joelle', lname: 'Asoau'},
  {fname: 'Brady', lname: 'Erickson'},
  {fname: 'Bailey', lname: 'Erickson'},
  {fname: 'Trevor', lname: 'Erickson'},
];

let msg = require('../index.js');

console.log(
  chalk.green.cyan(msg.name() + ' Version: ' + chalk.green.bold(msg.version()))
);

msg.log(chalk.green.bold('Node Messenger: Log'));
msg.info('Node Messenger: Info',['mike','kira']);
msg.note('Node Messenger: Note',['mike','kira']);
msg.success('Node Messenger: Success');
msg.warning('Node Messenger: Warning');
msg.error('Node Messenger: Error');

msg.chalkline('green');
msg.chalkline('red');
msg.chalkline('cyan');
msg.chalkline('magenta');
msg.chalkline('purple');
msg.chalkline('blue');


msg.dir(data);
msg.table([
  {fname: 'Mike', lname: 'Erickson'},
  {fname: 'Kira', lname: 'Erickson'},
]);

msg.table([
  ['fname','lname'],
  ['Mike','Erickson'],
  ['Kira','Erickson'],
  ['Joelle','Asoau'],
]);
