var express = require('express');
var router = express.Router();
var methodOverride = require('method-override');
var state = require("../models/state");
var stiRate = require("../models/stiRate");
var sti = require("../models/sti");

/*
router.get("/", function(req, res) {
    res.render("index");
});
*/
//Promise to 


//1. populate drop down choices for user
router.get("/", function(req, res) {
  var statesData = new Promise(function (resolve, reject) {
    //do sql stuff here 
    ///when done,
    state.all(function (data) {
      data ? resolve(data) : reject("No Data Found from State")
    });
  })

  var stiData = new Promise(function (resolve, reject) {
    sti.all(function (data) {
      data ? resolve(data) : reject("No Data Found from Sti")
    });
  })

  Promise.all([statesData, stiData]).then(function (results) {
    console.log(JSON.stringify(results));
    res.render("index", { states: results[0], stis: results[1] });
  }, function (reason) {
    console.log("One of the promises failed. Reason: " + reason)
    res.send(500)
  });
});


router.get("/sandbox", function(req, res) {
  state.all(function(data) {
    var info = {
      states: data
    };
    var states = info.states;
 //   console.log(states);
    res.render("sandbox", {states: states, layout: 'sandboxL'} );
  });
});


//2. When user picks the states

router.get("/api/states/:statePicked", function(req, res){
	console.log("call the route");
	//grab the user selected state id and put it in a stateID 
	var stateID = {"states.name": req.params.statePicked};

	//send the info for processing to the database
	stiRate.joinSelect(stateID, function(data){
		//SEND THE RETRIEVED DATA TO THE FRONT END
	res.json(data);
	});
});


	//joinSelect: function (condition, cb){
 //console.log("ok you are here now" + req.params.statePicked);


module.exports = router;