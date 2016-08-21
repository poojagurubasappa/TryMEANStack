var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = function(app, config)
{
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	app.use(express.static(rootPath + '/public'));
}