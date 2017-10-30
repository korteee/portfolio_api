const express = require('express');
const router = express.Router();
const mailController = require('./mail.controller');
const mailValidator = require('./../../../middlewares/validators/mail.validator')();

router.post('/', mailValidator, (req, res) => {
    
    const {name,email,message} = req.body;
    
    mailController.contactFormSubmit(name, email, message, () => {
        res.sendStatus(200);
    }, () => {
        res.boom.internal();
    })
})

module.exports = router;