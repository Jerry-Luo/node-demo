// 和readFile()类似，writeFile()也有一个同步方法，叫writeFileSync()：
'use strict';

var fs = require('fs');

var data = 'Hello, Node.js';
fs.writeFileSync('output.txt', data);