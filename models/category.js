const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
	name: {
		type: String,	
		required: true,
	},
	description: {
		type: String,
		required: true
	},

	userId: {
		type: String,
		required: true

	}
});

module.exports = mongoose.model('Category', CategorySchema)