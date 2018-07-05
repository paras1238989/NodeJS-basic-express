var express = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/', function (req, res) {
    res.send('Using cookies!!!');
  })

  app.get('/setCookie',function(req,res){
      res.cookie('name','Paras');
      res.cookie('project','LKM');
      res.send('created Cookies');
  });

  app.listen(4000,function(){
      console.log('server listening on 4000');
  })