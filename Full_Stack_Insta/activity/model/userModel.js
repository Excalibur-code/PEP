const connection = require("./connection");
const userModel = {};

// query
// create
let create = (userObj) => {
     // insert 
     userObj.uid = uuidv4();
     //create user
     return new Promise(function(resolve, reject){
        connection.query("INSERT INTO user SET ?",userObj, function (err, rows, fields) {// it sets all the elements at once in the table
            if (err) {
                 reject(err);
                 return;
            }else{
                 resolve(res);
            }
       })
     })
}
// get by uid
// update delete
// send request
// recieve request
module.exports.create = create;