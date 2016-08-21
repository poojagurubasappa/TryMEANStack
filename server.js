var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//var bodyParser = require('body-parser');
//var mongoose = require('mongoose');

var app = express();

var port = process.env.PORT || 3020;

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./server/config/config')[env];
require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./server/config/routes')(app);

var user = mongoose.model('user');
passport.use(new LocalStrategy(function(username,password,done){
	user.findOne({username: username}).exec(function(err,user){	
		if(user){
			done(null, user);
		}
		else {
			done(null,false);
		}
	})
}
));

passport.serializeUser(function(user, done){
	if(user){
		done(null,user._id);
	}
});

passport.deserializeUser(function(id,done){
	user.findOne({_id:id}).exec(function(err,user){
		if(user){
			done(null,user);
		}
		else {
			done(null,false);
		}
	})
});

app.listen(config.port, function(req,res){
	console.log("Application started on port : " + config.port );

// ** the views and view engine are not required since we are using html **

/*app.set('views', __dirname + '/server/views');
app.set('view engine','ejs');*/


/*app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));*/

//mongoose.connect('mongodb://localhost/meanStackDb');
/*mongoose.connect(config.db);
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
});*/

// ** for rendering partials **
/*app.get('/partials/:filename', function(req,res){
	res.sendFile(__dirname + '/server/views/partials/' + req.params.filename + '.html');
});

app.get('/', function(req,res){
	res.sendFile(__dirname + '/server/views/main.html');
});*/


});
