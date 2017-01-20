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

// Show `logger` messages instead of console (see `pretty-web-logger` -- https://www.npmjs.com/package/pretty-web-logger)
messenger.setOptions({logger: true});

messenger.info('info message');
messenger.note('note message');
messenger.success('success message');
messenger.warning('warning message');
messenger.error('error message');
messenger.table(data);

messenger.success('dots')
messenger.chalkline('•','green');

messenger.log('solid lines');
messenger.chalkline('','white');
messenger.chalkline('','red');
messenger.chalkline('','green');
messenger.chalkline('','blue');
messenger.chalkline('','yellow');
messenger.chalkline('','orange');
messenger.chalkline('','magenta');

let el = document.querySelector('#app');
el.innerHTML = '<pre>v' + vers + '</pre>';
