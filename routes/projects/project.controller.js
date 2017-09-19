const projectModel = require('./../../models').Project;
const technology = require('./../../models').Technology;

module.exports = new class {
    all(queryParams, cb) {
        if (!Object.keys(queryParams).length)
            return projectModel.findAll().then(cb)
        else
            return projectModel.findAll({
                attributes: queryParams.fields.split(',')
            }).then(cb)
    }

    create(body, cb, errCb) {
        projectModel.create({
                name: body.name,
                client: body.client,
                url: body.url,
                description: body.description,
                ProjectTypeId: body.projectType,
                img_full: body.img_url,
                technologies: JSON.parse(body.technologies).map(techId => {
                    return {
                        id: techId
                    }
                }),
                include: [{
                    model:technology,
                    as:'technologies'
                }]
            }).then(cb)
            .catch(errCb)
    }
};