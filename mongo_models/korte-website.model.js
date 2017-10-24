const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillCategory = {
	title: String,
	skillsList: [String] // To implement : Provide Limit
};

const project = {
	title: String,
	thumbnailUrl: String,
	client: String,
	type: { type: String },
	link: {
		title: String,
		url: String
	},
	imgUrl: String,
	description: String,
	technologies: [String] // To do : Provide limit
};

const website = {
	title: String,
	slides: {
		home: {
			title: String,
			subTitle: String,
			buttonText: String
		},
		about: {
			title: String,
			description: {
				p1: String,
				p2: String
			},
			buttonText: String
		},
		skills: {
			title: String,
			description: String,
			categories: [skillCategory] // To implement : Provide Limit,
		},
		projects: {
			title: String,
			description: String,
			list: [project]
		},
		contact: {
			title: String,
			description: String
		}
	},
	socialMediaLinks: {
		github: String,
		stackoverflow: String,
		linkedin: String
	},
	navigation: {
		home: String,
		about: String,
		skills: String,
		projects: String,
		contact: String
	}
};

module.exports = mongoose.model('WebsiteContent', new Schema(website));
