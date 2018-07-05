module.exports=function(req,res,next){
    var rmethod=req.method;
    var path=req.url;
    var reqTime=+new Date();
    
    res.on('finish',function(){
        var duration=+new Date()-reqTime;
        var logmessage=rmethod+' path: '+path+' took: '+duration+' ms.\r\n';
        console.log(logmessage);
    })

    next();
};