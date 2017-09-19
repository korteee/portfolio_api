'use-strict';

const express = require('express'),
    bodyParser = require('body-parser'),
    models = require('./models');

const app = express();
app.use(bodyParser.json());
app.use('/projects', require('./routes/projects'));
app.use('/projectTypes', require('./routes/projectTypes'));




models.sequelize.sync({
    force: false
}).then(() => {
    app.listen('3000', () => console.log("I'm up and running"));
})