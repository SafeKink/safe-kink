var express = require('express');
var router = express.Router();
var methodOverride = require('method-override');
var state = require("../models/state");




router.get("/", function(req, res) {
    res.render("index");
});


//1. populate drop down choices for user
router.get("/sandbox", function(req, res) {
  state.all(function(data) {
    var info = {
      states: data
    };
    var states = info.states;
    console.log(states);
    res.render("sandbox", {states: states, layout: 'sandboxL'} );
  });
});


//2. When user picks the state
router.get("/api/states/:statePicked", function(req, res){

 console.log("ok you are here now" + req.params.statePicked);
 res.redirect('/sandbox');

});


module.exports = router;