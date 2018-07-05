var myModule=require('./myModule');

console.log(myModule.calculator.add(12,23));

console.log(myModule.message);

var hello=myModule.f1();
console.log(hello);

console.log(myModule.calculator.sub(1,true)); //1-1

console.log(myModule.calculator.add("test","prg"));//testprg

console.log(myModule.calculator.sub("test","prg"));//NaN

console.log(myModule.calculator.sub("test",true)); //Nan

console.log(myModule.calculator.add("test",myModule.f1())); //testHello!

//console.log(myModule.calculator.sub("test1"," test2"));