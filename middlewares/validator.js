const validator = require('validator');
const models = require('./../models');
const ResponseMessages = require('./../common/requestmessages.constant');

function defaultValidator(model) {
    return function (req, res, next) {

        if (!Object.keys(req.query).length) next();

        if (!req.query.fields || req.query.fields.split(',').filter(f => !Object.keys(models[model].attributes).includes(f)).length) {
            return res.boom.badRequest();
        };

        next();
    }
};

function mailValidator() {
    return function (req, res, next) {

        const requiredFields = ['name', 'email', 'message'];
        const requestBody = Object.keys(req.body);


        if (!requestBody.length) return res.boom.badRequest(ResponseMessages.badReq.noArgs);

        for (const key of requiredFields) {
            if (!requestBody.includes(key)) {
                return res.boom.badRequest(ResponseMessages.badReq.missingArgs);
            };
        }

        if (!validator.isEmail(req.body.email)) {
            return res.boom.badRequest(ResponseMessages.badData.invalid.email);
        };

        next();
    }
};


module.exports = {
    default: defaultValidator,
    mail: mailValidator
}