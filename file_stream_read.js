const fs = require('fs');
const stream= require('stream');

var readStream=fs.createReadStream('Hello_node.js');
var writeStream=fs.createWriteStream('Sample.txt');
readStream.setEncoding('UTF8');

//var content='';
//readStream.on('data',function(chunk){ //data,error,end,close are different kind of listeners for ReadStream
//    console.log(chunk);
//});

readStream.pipe(writeStream);