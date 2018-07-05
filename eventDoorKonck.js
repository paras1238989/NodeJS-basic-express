var eventEmitter = require('events');

class MyEmitter extends eventEmitter{}

MyEvent = new MyEmitter();

MyEvent.on('Knock',function(){
    console.log("Door is opened!");
});

MyEvent.emit("Knock");