const express=require('express');
const body = require('body-parser');
const fs = require('fs');
const logger=require('./logger');
var app = express();
app.use(body.urlencoded({extended:false}));
app.use(body.json());
app.use(express.static('public'));
app.use(logger);
/*app.get('/login',function(req,res){
    if((req.query.username=="paras" && req.query.password=="password") || (req.query.username=="admin" && req.query.password=="admin")){
        res.send("Successfully logged in!");
    }
    else{
        res.send("Unauthorised user!")
    }
})*/

var books = {
    'Java':'JavaBook',
    'Nodejs':'NodejsBook',
    'Python':'PythonBook',
    'C++':'C++Book',
    'Sql':'SqlBook',
};

app.post('/login',function(req,res){
    if((req.body.username=="paras" && req.body.password=="password") || (req.body.username=="admin" && req.body.password=="admin")){
        res.send("Successfully logged in!");
    }
    else{
        res.send("Unauthorised user!")
    }
})

app.post('/signup',function(req,res){
    user=req.body.username+','+req.body.password+'\r\n';
    fs.appendFile('data.txt',user,function(err){
        if(err){
            res.send("There was an error!");
        }
        else{
            res.send("Successfully registered!");
        }
    });
});
//capture query value using :(variable_name)
app.get('/book/:subject',function(req,res){
    if(books[req.params.subject]){
        res.send("Found:"+books[req.params.subject]);
    }
    else{
        res.status(403).send("Book not Found");
    }

});

/*app.get('/books',function(req,res){
    res.send(Object.values(books));
    
});*/


app.get('/books',function(req,res){
    if(req.query.count>0){
        res.send(Object.entries(books).
    slice(0,res.query.count).map(entry=>entry)
    )
    }
    
});

app.listen(3000,function(){
    console.log("Server listening on 3000");
});