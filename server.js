var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost/restful");

var app = express(bodyParser);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/api" , require("./routes/api"));

app.listen(3001);
console.log('server on 3001...');