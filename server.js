var express = require('express');
var app = express();

//Reusable controllers
var empinfoController=function(req, res){
  console.log("Invoking  rest api for product list");
  var empinfo = [
    {empid:1, employee:"Akshay",designation:"developer", dob:"12-12-1995"},
    {id:2, employee:"Aditya",designation:"tester", dob:"1-1-1996"},
    {id:3, employee:"Ankita",designation:"devOps", dob:"10-10-94"}
  ];
  res.send(empinfo);
};

// setting router to map requests  with controllers

app.get('/empinfo',empinfoController);

var server = app.listen(8087, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8087", host, port)
})
