var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var routes = require('./controllers/routes.js');

var app = express();

app.use(express.static(__dirname + '/public/css'));
app.use(express.static(__dirname + '/public/images'));
app.use(express.static(__dirname + '/public/js'));

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

var PORT = 3000;
app.listen(PORT, function(){
	console.log("Server listening on: http://localhost:" + PORT);
}); 