const Sequelize = require('sequelize');
const database = require('../dbSequelize');
const Funcionario = require('./funcionario');

const Adiantamento = database.define('adiantamento13', {
    id_adianta: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id_adianta'
    }
})

Adiantamento.belongsTo(Funcionario, {
    constraint: true,
    foreignKey: 'idFuncionario'
})

Funcionario.hasMany(Adiantamento, {
    constraint: true,
    foreignKey: 'idAdiantamento'
})

module.exports = Adiantamento;