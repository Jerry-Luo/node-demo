'use strict';

var fs = require('fs');

var data = fs.readFileSync('sample.txt', 'utf-8');
console.log(data);

// 如果同步读取文件发生错误，则需要用try...catch捕获该错误：
// try {
//     var data = fs.readFileSync('sample.txt', 'utf-8');
//     console.log(data);
// } catch (err) {
//     // 出错了
// }