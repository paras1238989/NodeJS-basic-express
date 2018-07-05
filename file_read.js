const fs = require('fs');

var content=fs.readFileSync('async.js')
console.log(content.toString());
console.log("Program ended");