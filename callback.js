console.log("Program started");
function add(a,b){
    return a+b;
}

var result=add(3,4);

console.log("result = "+ result);

console.log("Program stopped");

function addAsync(inum1,inum2,callback){
    var res = inum1+inum2;
    callback(res);
}

console.log("Async started");

addAsync(4,5,function(res){
    console.log("Async res= "+res)
});

console.log("Async stopped");