const ptModel = require('./../../../models').ProjectType;

module.exports = new class {
    all(queryParams, cb, ISErrorCb) {
        if (!Object.keys(queryParams).length)
            return ptModel.findAll().then(cb)
        return ptModel.findAll({
            attributes: queryParams.fields.split(',')
        }).then(cb).catch(ISErrorCb)
    }

    create(body, cb, ISErrorCb) {
        return ptModel.create({
            name: body.name
        }).then(cb).catch(ISErrorCb)
    }
};