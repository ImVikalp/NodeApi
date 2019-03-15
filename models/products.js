const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	name: {
		type: String,	
		required: true,
	},
	price: {
		type: String,
		required: true
	},
	userId: {
		type: String,
		required: true
	}

});

module.exports = mongoose.model('Product', ProductSchema)