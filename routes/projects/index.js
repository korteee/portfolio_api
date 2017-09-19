const express = require('express');
const router = express.Router();
const ProjectController = require('./project.controller');
const upload = require('./../../middlewares/upload');
const sendOnCloudinary = require('./../../middlewares/sendOnCloudinary');
const validate = require('./../../middlewares/validator');

router.get('/', validate('Project'), (req, res) => {
    ProjectController.all(req.query, (projects) => {
        res.send(projects);
    })
})

router.post('/', upload.single('file'), sendOnCloudinary, (req, res) => {

    ProjectController.create(req.body, (project) => {
        res.send(project);
    }, (err) => {
        if (err.errors && err.errors.length) {
            res.status(400).send(err.errors[0]);
        } else if (err.name === "SequelizeForeignKeyConstraintError") {
            res.status(400).send("Invalid Project Type")
        }
        res.status(500).send();
    })
})

module.exports = router;