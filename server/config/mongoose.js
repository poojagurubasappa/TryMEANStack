var mongoose = require('mongoose');

module.exports = function(config){
	mongoose.connect(config.db);
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

	var userSchema = mongoose.Schema({firstName : String, lastName : String, Email : String});
	var user = mongoose.model('user', userSchema);
	var lastName;
	user.find({}).exec(function(err,res){
		if(res.length === 0){
			user.create({firstName: 'Bob', lastName: 'Marley', Email: 'BobMarley@VTV.com'});
		}
		else {			
			console.log(res[0].lastName);
		}
	});
}