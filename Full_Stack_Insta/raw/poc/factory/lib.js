//firstly the whole file which is required is executed.
console.log("Hello from lib");
//node obj that is exported to the file which requires
//current file
module.exports.fn = function createFactory (entity) {
    console.log("Inside entity");
    console.log("returning create" + entity + "fn");
    //below function will be returned as reference via ln 5 of client.js
    return function create(entityObj) {
        console.log("Inside entity obj");
        console.log("Created " + entity + "using" + JSON.stringify(entityObj));
    }
}
//console.log("Line no 8 in lib");
//console.log(module.exports);//object will be printed
//module.exports.fn();//run the function fn
module.exports.value = 4;//values also need to be exported via object if needed.
console.log("-----------------------");
