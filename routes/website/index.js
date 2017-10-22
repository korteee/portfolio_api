const express = require('express');
const router = express.Router();
const websiteController = require('./website.controller');
const recaptchaSiteCode = require('./../../constants/credentials.constant').recaptcha.site;

router.get('/', (req, res) => {
    res.render('index', {title:`Hi from Korte`, recaptchaSiteCode})
})

module.exports = router;
