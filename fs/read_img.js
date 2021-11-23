'use strict';

var fs = require('fs');

fs.readFile('sample.png', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ' bytes');
    }
});

// 当读取二进制文件时，不传入文件编码时，回调函数的data参数将返回一个Buffer对象。在Node.js中，Buffer对象就是一个包含零个或任意个字节的数组（注意和Array不同）。
// Buffer对象可以和String作转换，例如，把一个Buffer对象转换成String：

// Buffer -> String
var text = data.toString('utf-8');
console.log(text);

// String -> Buffer
var buf = Buffer.from(text, 'utf-8');
console.log(buf);

