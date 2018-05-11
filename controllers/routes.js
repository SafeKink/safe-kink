var express = require('express');
var router = express.Router();
var methodOverride = require('method-override');
var kink = require('../models/kink.js');

router.get('/', function(req,res){
		res.render('index');
});


module.exports = router;