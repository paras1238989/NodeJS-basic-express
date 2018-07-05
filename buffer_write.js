const fs=require('fs');

var buffer=Buffer.alloc(10);
buffer.write("Accenture");
console.log(buffer.toString());
console.log(buffer.reverse().toString());
console.log(buffer.lastIndexOf("A"));

var str="TESTSTRING";
console.log(str.toString());
//console.log(str.reverse().toString());
console.log(str.lastIndexOf("T"));