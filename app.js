'use-strict';

const express = require('express'),
	path = require('path'),
	handlebars = require('express-handlebars'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	boom = require('express-boom'),
	mongoose = require('mongoose'),
	models = require('./models'),
	app = express();

mongoose.connect("mongodb://localhost/portfolio-website", {
	useMongoClient: true
});

app.engine('.hbs', handlebars({ extname: '.hbs' }));

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(bodyParser.json());
app.use(boom());

app.use('/', require('./routes/website'));

app.use('/api/projects', require('./routes/api/projects'));
app.use('/api/projectTypes', require('./routes/api/projectTypes'));
app.use('/api/mail', require('./routes/api/mail'));

// models.sequelize.sync({
//     force: false
// }).then(() => {

// })

app.listen('3000', () => console.log("I'm up and running"));
