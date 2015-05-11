var express = require("express");
var router = express.Router();

// models
var Product = require('../models/product'),
	User = require('../models/user');

// routes
Product.methods(['get' , 'put' , 'post' , 'delete']);
Product.register(router , '/products');

User.methods(['get' , 'put' , 'delete' , {
	method: 'post',
	before: null,
	after: function (req , res, next , err , model) {
		console.log(err);
		console.log(model);
	}
}]);

User.register(router , '/user');

module.exports = router;