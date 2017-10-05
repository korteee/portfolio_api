const express = require('express');
const router = express.Router();
const mailController = require('./mail.controller');

router.post('/', (req, res) => {
    if (Object.keys(req.body).length) {
        mailController.sendMail(req.body.name, req.body.email, req.body.message, 'korte.stavros@hotmail.com', () => {
            res.sendStatus(200);
        }, () => {
            res.sendStatus(500);
        })
    }
})

module.exports = router;