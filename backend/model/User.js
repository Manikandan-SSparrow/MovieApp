const Sequelize = require('sequelize');
const db = require('./config/database');

const User = db.define('User', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.TEXT
    },
    rating: {
        type: Sequelize.FLOAT
    }
});