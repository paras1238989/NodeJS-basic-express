const fs=require('fs');

fs.copyFile("Hello_node.js","scrap.js",function(err){
    if(!err){
        console.log("File copied");
    }   
});

console.log("Program ended");

