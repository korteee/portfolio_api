const express = require('express');
const router = express.Router();
const websiteController = require('./website.controller');
const recaptchaSiteCode = require('./../../constants/credentials.constant').recaptcha.site;

router.get('/', (req, res) => {
	websiteController.getSiteContent((content) => {
		res.render('index', Object.create({
			content,
			recaptchaSiteCode
		}))
	}, (err) => {
		res.boom.internal();
	})
})

module.exports = router;
