const express = require('express');
const router = express.Router();
const mailController = require('./mail.controller');
const mailValidator = require('./../../middlewares/validator').mail();

console.log("Mail ready")

router.post('/', mailValidator, (req, res) => {
    
    const mailTo = 'korte.stavros@hotmail.com';
    const {name,email,message} = req.body;
    
    mailController.sendMail(name, email, message, mailTo, () => {
        res.sendStatus(200);
    }, () => {
        res.boom.internal();
    })
})

module.exports = router;