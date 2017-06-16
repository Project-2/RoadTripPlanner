var path = require("path");
//imports the model, burger.js to use its database functions
var db = require("../models");
var express = require("express");
var router = express.Router();
// Routes
// =============================================================
module.exports = function(app) {

// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads view.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

//handlebars route for tripOverview page - WORKS
app.get("/tripOverview", function(req, res) {
    db.Trip.findAll({})
        .then(function(tripName) {
            var hbsObject = { trip: tripName };
            res.render("../views/tripOverview", hbsObject);
        });
});

// handlebars route for addMember page
app.get("/addMember", function(req, res){
  db.Member.findAll({})
    .then(function(memberName) {
      var hbsObject = {member: memberName};
      res.render("../views/addMember", hbsObject);
    });
});

app.get("/transportation", function(req, res){
  db.Member.findAll({})
    .then(function(memberCar) {
      var hbsObject = {member: memberCar};
      res.render("../views/transportation", hbsObject);
    });
});

// app.get("/transportation", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/transportation.html"));
// });

app.get("/createTrip", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/createTrip.html"));
});

app.get("/necessities", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/necessities.html"));
});

app.get("/createItemList", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/createItemList.html"));
});

app.get("/selectItems", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/selectItems.html"));
});



};
