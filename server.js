require("dotenv").config();
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var routes = require('./controllers/routes.js');
var stiRate = require("./models/stiRate");


var app = express();

// app.use(express.static(__dirname + '/public/css'));
// app.use(express.static(__dirname + '/public/images'));
// app.use(express.static(__dirname + '/public/js'));
// app.use(express.static(__dirname + '/public/scss'));
// app.use(express.static(__dirname + '/public/vendor'));

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

app.use(methodOverride('_method'));
app.use('/', routes);



app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');


	app.get("/api/states/:statePicked", function(req, res){
		console.log("this works");

		var stateID = {"states.id": req.params.statePicked};
	//send the info for processing to the database
	stiRate.joinSelect(stateID, function(data){
		//SEND THE RETRIEVED DATA TO THE FRONT END
		console.log(data);
	res.json(data);
	});
		//res.json(friendsData);
});



var PORT = 3000;
app.listen(PORT, function(){
	console.log("Server listening on: http://localhost:" + PORT);
}); 