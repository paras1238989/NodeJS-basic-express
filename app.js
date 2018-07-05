const express=require('express');

var app = express();

app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.get('/location',function(req,res){
    var location={
        facility:'BDC3',
        tower:'A',
        project:'LKM'
    };
    res.send(location);
    res.send(location);
});
app.post("/posts",function(req,res){
    res.send("Post method is called");
});
app.all("/*",function(req,res){
    res.send("Invalid");
});
app.listen(3000,function(){
    console.log("Server listening on 3000");
});