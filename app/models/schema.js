var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/node');

var userSchema = new mongoose.Schema({
	id : { type: String, unique: true},
	name : String,
	pw : String,
	date : Date,
	tweet_id : [String]} , { collection : 'users'});

var roomSchema = new mongoose.Schema({
	title : { type: String, unique: true},
	title_entered : String,
	roomId : String,
	date : Date,
	bj : String,
	block : [String],
	pw : String} , { collection : 'rooms'});


// compile to Model
var User = mongoose.model('User', userSchema);
var Room = mongoose.model('Room', roomSchema);

module.exports = {
	User : User,
	Room : Room
};