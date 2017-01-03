let data = [
  {fname: 'Mike', lname: 'Erickson'},
  {fname: 'Kira', lname: 'Erickson'},
  {fname: 'Joelle', lname: 'Asoau'},
  {fname: 'Brady', lname: 'Erickson'},
  {fname: 'Bailey', lname: 'Erickson'},
  {fname: 'Trevor', lname: 'Erickson'},
];

let vers = messenger.version();
console.log('Version: ' + vers);

messenger.info('info');
messenger.note('note');
messenger.success('success');
messenger.warning('warning');
messenger.error('error');
// messenger.table([{fname: 'Mike'}]);
// messenger.table(data);
//
messenger.chalkline('*');

let el = document.querySelector('#app');
el.innerHTML = '<pre>v' + vers + '</pre>';
