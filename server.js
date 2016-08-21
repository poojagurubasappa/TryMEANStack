var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

var port = process.env.PORT || 3020;

// ** the views and view engine are not required since we are using html **

/*app.set('views', __dirname + '/server/views');
app.set('view engine','ejs');*/

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost/meanStackDb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.on('open', function callback(){
	console.log("meanStackDb open");
});

var diarySchema = mongoose.Schema({name:String,email:String,password:String});
var diaryModel = mongoose.model('diaryModel',diarySchema);
var diary;
diaryModel.findOne().exec(function(err,res){
	diary = res.name;
	console.log(diary);
});

// ** for rendering partials **
app.get('/partials/:filename', function(req,res){
	res.sendFile(__dirname + '/server/views/partials/' + req.params.filename + '.html');
});

app.get('/', function(req,res){
	res.sendFile(__dirname + '/server/views/main.html');
});

app.listen(port, function(req,res){
	console.log("Application started on port : " + port );
});
