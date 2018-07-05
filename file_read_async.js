const fs=require('fs');

fs.readFile('Hello_node.js',function(err,content){
    console.log(content.toString())
})

console.log("Program ended")