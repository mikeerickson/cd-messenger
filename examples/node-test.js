const chalk = require('chalk');

let data = [
  {fname: 'Mike', lname: 'Erickson', gender: 'Male', role: 'Parent', kids: 'yes'},
  {fname: 'Kira', lname: 'Erickson', gender: 'Female', role: 'Parent', kids: 'yes'},
  {fname: 'Joelle', lname: 'Erickson (Asoau)', gender: 'Female', role: 'Child', kids: 'yes'},
  {fname: 'Brady', lname: 'Erickson', gender: 'Male', role: 'Child', kids: 'no'},
  {fname: 'Bailey', lname: 'Erickson', gender: 'Female', role: 'Child', kids: 'no'},
  {fname: 'Trevor', lname: 'Erickson', gender: 'Male', role: 'Child', kids: 'no'},
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
msg.chalkline('blue');

msg.table(data);
msg.chalkline('blue');

msg.table([
  ['fname','lname','role'],
  ['Mike','Erickson','Parent'],
  ['Kira','Erickson','Parent'],
  ['Joelle','Erickson (Asoau)','Child'],
  ['Brady','Erickson','Child'],
  ['Bailey','Erickson','Child'],
  ['Trevor','Erickson','Child'],
]);
