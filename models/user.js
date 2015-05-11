// dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// schema
var userSchema = new mongoose.Schema({
	name: String,
	email: {type: String , index:{unique:true}},
	password: String,
});

// Return model
module.exports = restful.model('Users' , userSchema);