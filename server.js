const express = require("express"); // npm i express
const bodyParser = require("body-parser");

const app = express(); //set up express

app.use(bodyParser.urlencoded({extended: true})); // parse data coming from HTML form. Use anytime the information from a form is needed
app.use(bodyParser.json());


app.get("/", function(req, res){  // set up route
  res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){
  res.send("whoop");
});

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req,res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height); //float is a decimal

  var bmi = (weight / (height * height)) * 703;
  res.send("Your BMI is " + bmi);
});


app.listen(3000, function() {   //spin up server
  console.log("Served!")
});