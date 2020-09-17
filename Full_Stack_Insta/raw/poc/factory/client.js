//run by node client.js
let expObj = require("./lib");//We will get module export object.
//console.log(expObj.val);
//expObj.fn();
//console.log(expObj);
//let rVal = expObj.fn("user");
//console.log(rVal);
//rVal({name: "Harsh"});
//creates a create Post fn.
let rVal = expObj.fn("post");
//create Post fn is called when req is recieved
rVal({
    author: "Harsh",
    "desc" : "hello from me"
})