const {Sequelize}  = require('sequelize');

const sequelize = new Sequelize ('postgres://postgres:connect5432@localhost:5432/dvdrental');

module.exports = sequelize;

sequelize.authenticate()
.then(() => {
    console.log("Connection has been established");
})
.catch(err => {
    console.error('Unable to connect to the database: ', err);
});