# cd-messenger
### Node and Browser Messages
Use same API across browser or node and cd-messenger will handle the rest for you!


View on [npm](https://www.npmjs.com/package/cd-messenger)


### Install with [npm](npmjs.org)

```sh
npm i -S cd-messenger
```

### Install with [yarn](https://yarnpkg.com/lang/en/docs/install/#mac-tab)

```sh
yarn add cd-messenger
```

### Add as script tag
```html
<script src="lib/messenger.min.js"></script>
```

### Usage

```js
const msg = require('cd-messenger');

// You can use titleCase or lower case for msg methods
// assuming `name` variable has been set to value before calling below

let name = 'Mike Erickson';

=========================================================================================
msg.info    ('Loading...');
msg.log     (`name: ${name}`);  // default color White
msg.info    (`name: ${name}`);  // default color Cyan
msg.success (`name: ${name}`);  // default color Green
msg.warning (`name: ${name}`);  // default color Yellow
msg.error   (`name: ${name}`);  // default color Red
msg.note    (`name: ${name}`);  // default color Orange
msg.debug   (`name: ${name}`);  // default color white
msg.table   (array|object)      // uses console.table (browser) or nice cli table (node)

=========================================================================================
msg.line(...)
msg.line  // displays a colored line (you can define line character, color, and width)
msg.line    ('', 'magenta');    // displays a line with solid magenta (no char)
msg.line    ('•', 'green');     // displays a line with repeating '•' and green
msg.line    ('', 'yellow', 40); // display with repeating (40) box, yellow

=========================================================================================
msg.setOptions(options: object)     // customize default browser appearance
 option.logger (true|false:default) // try it out and see how it looks
```


### License

Copyright &copy; 2016-2018 Mike Erickson
Released under the MIT license


### Credits

cd-messenger written by Mike Erickson

E-Mail: [codedungeon@gmail.com](mailto:codedungeon@gmail.com)

Twitter: [@codedungeon](http://twitter.com/codedungeon)

Webiste: [codedungeon.org](http://codedungeon.org)

***
