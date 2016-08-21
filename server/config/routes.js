var express = require('express');
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = function(app){
	app.get('/partials/:filename', function(req,res){
	res.sendFile(rootPath + '/server/views/partials/' + req.params.filename + '.html');
});

	app.get('/', function(req,res){
	res.sendFile(rootPath + '/server/views/main.html');
});
}