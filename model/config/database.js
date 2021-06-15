const Sequelize = require('sequelize');

const model = new Sequelize('MovieDB', 'manikandan', '', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    },
    define: {
        timestamps: false
    }
});

module.exports = model;