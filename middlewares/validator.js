const models = require('./../models');

module.exports = function (model) {
    return function (req, res, next) {

        if (!Object.keys(req.query).length) return next();

        if (!req.query.fields || req.query.fields.split(',').filter(f => !Object.keys(models[model].attributes).includes(f)).length) {
            res.status(400).send('BAD REQUEST');
        }

        return next();
    }
}