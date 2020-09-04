//api making framework
const express = require('express');
const app = express();
let userDB = require("./db/user.json");
const fs = require('fs');
const path = require("path");
const { v4: uuidv4 } = require('uuid');
//get,post,patch,delete => express predefined method
//127.0.0.3000 => localhost:3000/home
//get all => done by admin
//get particular user
//post => create a user
//update => update a user
//delete a user
//name,password,handle,image,url,bio,uid,email---entries for user
app.use(express.json());//for accepting  data in req body--compulsory line
//create
app.post("/user", (req, res) => {
      let user = req.body;
      user.uid = uuidv4();
      userDB.push(user);
      //saved to disk
      fs.writeFileSync(path.join(__dirname,"./db/user.json"), JSON.stringify(userDB));
      //res
      res.status(201).json({//201 is success code for creation
           status : "success",
           //res : "user created",
           user: req.body
      })
})
//get => some changing parameter
//getAll
app.get("/user", (req, res) => {//this is templating route--":" means the value will be changing
      //request parameter => user id
      //console.log(req.params);
      res.status(201).json({//201 is success code for creation
           status : "success",
           userDB : userDB
      })
})
//get One
//npm i uuid
//npm i nodemon --save-dev
app.get("/user/:uid", (req, res) => {//this is templating route--":" means the value will be changing
      //request parameter => user id
      let cUid = req.params.uid;
      let userArr = userDB.filter((user) => { 
             return user.uid== cUid//current uid is compared to user.uid in the object array.
      });
      console.log(req.params);
      res.status(201).json({//201 is success code for creation
           status : "success",
           user: userArr.length[0] == 0 ? "no user" : userArr[0]
      })
})

//update => key search
app.patch("/userDB/:uid", (req, res) => {
      let user = getUserById(req.params.uid);
      let toBeUpdatedObj = req.body;
      //user, obj
      for(let key in toBeUpdatedObj) {
             console.log(key);
             user[key] = toBeUpdatedObj[key];
      }
      fs.writeFileSync(path.join(__dirname,"./db/user.json"), JSON.stringify(userDB));
      res.status(200).json({
             status : "success",
             user : user
      })
})
//delete => filter
app.delete("/user/:uid", (req, res) => {
      let cid = req.params.uid;
      console.log(userDB.length);
      userDB = userDB.filter(() => { return user.uid != cid;})
      fs.writeFileSync(path.join(__dirname,"./db/user.json"), JSON.stringify(userDB));
      res.status(200).json({
            status : "success",
            userDB,
            length : userDB.length
      })
})
//userDB.splice(idx,1);
app.listen(3000, () => {
      console.log("Server started at the port 3000");
})
function getUserById(cUid) {
      let userArr = userDB.filter((user) => { 
             return user.uid== cUid//current uid is compared to user.uid in the object array.
      });
      let user = userArr[0];   
}