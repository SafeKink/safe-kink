var express = require('express');
var router = express.Router();
var methodOverride = require('method-override');
var state = require("../models/state");



router.get("/", function(req, res) {
    res.render("index");
});


router.get("/sandbox", function(req, res) {
  state.all(function(data) {
    var hbsObject = {
      states: data
    }; 

    //var info = [{name: "shanti"}, {name: "shantero"}];

    var states = hbsObject.states
    //console.log(hbsObject.states[0].name);
   // console.log(JSON.stringify(hbsObject));
    //res.render("index");
    res.render("sandbox", {states: states});
  });
});


/*
router.get('/', function(req,res){
	function result(res){
		var show = res;
		console.log("from the result function: " + show);
	}

	var theStates = state.all(result());
	console.log("States: " + theStates);
		res.render('index');
});
*/

router.get('/sandbox', function(req,res){
	res.render('sandbox', {layout: 'sandboxL' });
});


module.exports = router;