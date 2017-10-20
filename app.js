'use-strict';

const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    boom = require('express-boom'),
    models = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(boom());
app.use('/projects', require('./routes/projects'));
app.use('/projectTypes', require('./routes/projectTypes'));
app.use('/mail', require('./routes/mail'));




// models.sequelize.sync({
//     force: false
// }).then(() => {
   
// })

app.listen('3000', () => console.log("I'm up and running"));