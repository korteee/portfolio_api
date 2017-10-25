const express = require('express');
const router = express.Router();
const Bio = require('./bio.controller');
const badReqValidate = require('./../../../middlewares/validator').badRequest.bio();

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
