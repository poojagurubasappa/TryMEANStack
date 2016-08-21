var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
console.log(rootPath);

module.exports = {
	'development' : {
		'db': 'mongodb://localhost/meanStackDb',
		'rootPath': rootPath,
		'port': process.env.PORT || 3020
	}
}