//api making framework
const express = require('express');
const app = express();
//get,post,patch,delete => express predefined method
app.get("/", function (req, res) {//simple get method of express, "/" means homepage, function() is the handler func of route
     res.end("<h1>Welcome to Express</h1>");
});
//127.0.0.3000 => localhost:3000/home
app.listen(3000, () => {
     console.log("Server started at the port 3000");
})
//server will be created till here.