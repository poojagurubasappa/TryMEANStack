var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3020;

// ** the views and view engine are not required since we are using html **

/*app.set('views', __dirname + '/server/views');
app.set('view engine','ejs');*/

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
	res.sendFile(__dirname + '/server/views/main.html');
});

app.listen(port, function(req,res){
	console.log("Application started on port : " + port );
});
