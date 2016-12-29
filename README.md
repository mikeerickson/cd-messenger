# cd-messenger
### Node and Browser Messages (Lite version of gulp-messenger)

View on [npm](https://www.npmjs.com/package/cd-messenger)


### Install with [npm](npmjs.org)

```sh
npm install cd-messenger -S
```

### Usage

```js
var msg = require('cd-messenger');

// You can use titleCase or lower case for msg methods
// assuming `name` variable has been set to value before calling below

let name = 'Mike Erickson';

msg.info    ('Loading...');
msg.log     (`name: ${name}`);  // default color White
msg.info    (`name: ${name}`);  // default color Cyan
msg.success (`name: ${name}`);  // default color Green
msg.warning (`name: ${name}`);  // default color Yellow
msg.error   (`name: ${name}`);  // default color Red
msg.debug   (`name: ${name}`);  // default color white
msg.table   (array|object)
```


### License

Copyright (c) 2016-2017 Mike Erickson
Released under the MIT license


### Credits

cd-messenger written by Mike Erickson

E-Mail: [codedungeon@gmail.com](mailto:codedungeon@gmail.com)

Twitter: [@codedungeon](http://twitter.com/codedungeon)

Webiste: [codedungeon.org](http://codedungeon.org)

***
