var http=require('http');
http.createServer(function(req,res){
    res.write("Hello from http server");
    res.end();
}).listen(3000);
console.log("Server listening on port 3000");