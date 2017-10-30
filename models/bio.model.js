const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const requestMessages = require('./../constants/requestmessages.constant');

const pararaph = {
	type: String,
	maxlength: 350
};

const bio = {
	title: {
		type: String,
		required: true,
		minlength:5,
		maxlength: 30
	},
	description: {
		type: [pararaph],
		required: true,
		validate: {
			validator: function(desc) {
				return desc.length <= 3 && desc.length >= 1;
			},
			message: requestMessages.badData.invalid.description
		}
	}
};

module.exports = mongoose.model('Bio', new Schema(bio));
