const express = require('express');
const router = express.Router();
const websiteController = require('./website.controller');

router.get('/', (req, res) => {
    res.render('index', {title:`Hi from Korte`})
})

module.exports = router;
