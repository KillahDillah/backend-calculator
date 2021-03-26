const express = require("express");

const app = express(); //set up express

app.get("/", function(req, res){  // set up route
  res.send("Hello World!")
})

app.listen(3000, function() {   //spin up server
  console.log("Served!")
})