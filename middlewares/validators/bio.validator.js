const Joi = require("joi");

const bioSchema = Joi.object({
	title: Joi.string().min(5).max(30).required(),
	description: Joi.array().items(Joi.string().max(350)).max(3).required()
});

const validator = {
	create: createValidator
};

module.exports = validator;

function createValidator() {
	return function(req, res, next) {
		Joi.validate(req.body, bioSchema, function(error, value) {
			if (error) {
				return res.boom.badRequest(error.name);
			};
			next()
		})
	}
}
