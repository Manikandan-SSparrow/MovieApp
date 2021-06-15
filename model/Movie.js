const Sequelize = require('sequelize');
const db = require('./config/database');

const Movie = db.define('Movie', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.TEXT
    },
    genre: {
        type: Sequelize.TEXT
    },
    image_url: {
        type: Sequelize.TEXT
    },
    total_views: {
        type: Sequelize.INTEGER
    },
    average_rating: {
        type: Sequelize.FLOAT
    },
    is_deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
},{
    tableName: 'movie',
});

module.exports = Movie;