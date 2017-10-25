const express = require('express');
const router = express.Router();
const Bio = require('./bio.controller');
const rules = require('./../../../constants/model.rules.constant').bio;
const badReqValidate = require('./../../../middlewares/validator').badRequest(rules);

router.get('/', (req, res) => {

})

router.post('/', badReqValidate, (req, res) => {
	Bio.create(req.body,
		() => {
			res.sendStatus(200);
		},
		res.boom.internal);
})

router.put('/', (req, res) => {

})

module.exports = router;
