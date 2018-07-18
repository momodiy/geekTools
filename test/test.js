/*
* Author: stevenlee
* Date: 2018/6/4
* Description: buffer 输出文件
*/

var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
var writeStream = fs.createWriteStream(__dirname + '/whiteme.txt', 'utf8');
readStream.setEncoding('utf8');

//使用流实现读取写入操作
// on data 接收数据时触发
// readStream.on('data', chunk => {
//     console.log('stream test');
//     console.log(chunk);
//     writeStream.write(chunk);
// });

//on end 数据接收完成触发

// readStream.on('end', chunk => {
//     console.log('end ');
//     console.log(chunk);
// });

// another way to write data
// writeStream.write('Hello Steven Lee');
// writeStream.end();
// writeStream.on('finish', e => console.log(666))
//

//使用管道实现读取写入

 readStream.pipe(writeStream);//文件复制