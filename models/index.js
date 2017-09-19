const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

const sequelize = new Sequelize('korte', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const db = {};

fs.readdirSync(__dirname)
    .filter(f => {
        return f.includes('.') && f !== 'index.js'
    })
    .forEach(f => {
        let model = sequelize.import(path.join(__dirname, f));
        db[model.name] = model;
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize; 

//Associations
db.ProjectType.hasMany(db.Project, {as:'Type'});

db.Project.belongsToMany(db.Technology, {through: 'Project_Technology'});
db.Technology.belongsToMany(db.Project, {through: 'Project_Technology'});


module.exports = db;
