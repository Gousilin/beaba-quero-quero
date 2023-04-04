const Sequelize = require('sequelize');
const database = require('../dbSequelize');

const Rh = database.define('rh', {
    id_rh:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    senha_rh: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Rh;