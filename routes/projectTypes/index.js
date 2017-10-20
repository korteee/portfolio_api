const express = require('express');
const router = express.Router();
const ProjectTypeController = require('./projectType.controller');
const validate = require('./../../middlewares/validator').default;


router.get('/', validate('ProjectType'), (req, res) => {
    ProjectTypeController.all(req.query, (projectTypes) => {
        res.send(projectTypes);
    }, () => {
        res.status(500).send('Oh Sorry. Something happened.')
    })
})

router.post('/', (req, res) => {
    ProjectTypeController.create(req.body, (projectType) => {
        res.send(projectType);
    }, (err) => {
        res.status(500).send(err);
    })
})



module.exports = router;