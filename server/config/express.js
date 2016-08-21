var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

module.exports = function(app, config)
{
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	//adding cookie parser and session middleware
	app.use(cookieParser());
	app.use(session({secret:'magic beans',resave:false,saveUninitialized:false}));
	app.use(passport.initialize());
	app.use(passport.session());

	app.use(express.static(rootPath + '/public'));
}