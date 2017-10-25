const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const requestMessages = require('./../constants/requestmessages.constant');

function atLeastOne(inputs) {
	return Array.isArray(inputs) && !!inputs.length;
};

const bio = {
	title: {
		type: String,
		required: true,
		maxlength: 15
	},
	description: {
		type: Array,
		validate: {
			validator: atLeastOne,
			message: requestMessages.badData.invalid.description
		}
	}
};

module.exports = mongoose.model('Bio', new Schema(bio));
