const express = require('express');
const router = express.Router();
const Bio = require('./bio.controller');
const validator = require('./../../../middlewares/validators/bio.validator').create();

router.get('/', (req, res) => {

})

router.post('/', validator, (req, res) => {
	Bio.create(req.body,
		() => {
			res.sendStatus(200);
		},
		(validationError) => {
			if (validationError) {
				return res.boom.badRequest();
			};
			res.boom.internal();
		});
})

router.put('/', (req, res) => {

})

module.exports = router;
