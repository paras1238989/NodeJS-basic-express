const stream = require('stream');
const net = require('net');

var server = net.createServer(function(socket){
    console.log('Client connected.....');
    socket.write('Type Something!');
    socket.on("readable",function(){
        process.stdout.write(this.read());
        if(socket.read() == 0) {
            console.log("if");
            socket._destroy();
        }
    });
}).listen(8081,function(){
    console.log("Listening on 8081!");
});