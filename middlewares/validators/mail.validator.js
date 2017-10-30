const validator = require('validator');
const ResponseMessages = require('./../../constants/requestmessages.constant');
const recaptchaSecret = require('./../../constants/credentials.constant').recaptcha.secret;
const request = require('request');

function mailValidator() {
	return function(req, res, next) {

		const requiredFields = ['name', 'email', 'message', 'g-recaptcha-response'];
		const requestBodyKeys = Object.keys(req.body);

		if (!requestBodyKeys.length) return res.boom.badRequest(ResponseMessages.badReq.noArgs);

		for (const key of requiredFields) {
			if (!requestBodyKeys.includes(key) || !req.body[key]) {
				return res.boom.badRequest(ResponseMessages.badReq.missingArgs);
			};
		}

		if (!validator.isEmail(req.body.email)) {
			return res.boom.badRequest(ResponseMessages.badData.invalid.email);
		};

		request(`https://www.google.com/recaptcha/api/siteverify`, {
			method: 'POST',
			qs: {
				secret: recaptchaSecret,
				response: req.body['g-recaptcha-response']
			}
		}, (err, resp, body) => {
			if (err) return res.boom.internal();

			body = JSON.parse(body);

			if (!body.success) return res.boom.unauthorized();

			next();
		})
	}
};

module.exports = mailValidator;
