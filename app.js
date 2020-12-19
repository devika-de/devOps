const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("hello from Docker...!");
});

app.listen(8888, function(){
    console.log("app listening on 8888");
});
