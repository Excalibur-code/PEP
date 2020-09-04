//api making framework
const express = require('express');
const app = express();
const users = require("./db/user.json");
const fs = require('fs');
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
app.post("/user", function (req, res) {
      let user = req.body;
      user.uid = uuidv4();
      users.push(user);
      //saved to disk
      fs.writeFileSync("./db/user.json", JSON.stringify(users));
      //res
      res.status(201).json({//201 is success code for creation
           status : "success",
           //res : "user created",
           user: req.body
      })
})
app.listen(3000, () => {
      console.log("Server started at the port 3000");
})
