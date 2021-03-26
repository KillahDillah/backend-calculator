const express = require("express"); // npm i express
const bodyParser = require("body-parser");

const app = express(); //set up express

app.use(bodyParser.urlencoded({extended: true})); // parse data coming from HTML form. Use anytime the information from a form is needed
// app.use(bodyParser.json());


app.get("/", function(req, res){  // set up route
  res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req,res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send(result);
});


app.listen(3000, function() {   //spin up server
  console.log("Served!")
})