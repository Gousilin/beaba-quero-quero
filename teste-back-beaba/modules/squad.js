const Sequelize = require('sequelize');
const database = require('../dbSequelize');
const Funcionario = require('./funcionario');

const Squad = database.define('squad', {
    id_squad:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_squad: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


module.exports = Squad;