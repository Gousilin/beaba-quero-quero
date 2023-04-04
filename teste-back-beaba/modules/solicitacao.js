const Sequelize = require('sequelize');
const database = require('../dbSequelize');
const Funcionario = require('./funcionario');

const Solicitacao_ferias = database.define('ferias_solicitacao', {
    id_solicitacao:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    data_solicitacao: {
        type: Sequelize.DATE,
        allowNull: false
    },
    data_inicio: {
        type: Sequelize.DATE,
        allowNull: false
    },
    data_final: {
        type: Sequelize.DATE,
        allowNull: false
    },
    duracao: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mensagem_funcionario: {
        type: Sequelize.STRING,
        allowNull: true
    },
    mensagem_gestor: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

Solicitacao_ferias.belongsTo(Funcionario, {
    constraint: true,
    foreignKey: 'idFuncionario'
})

Funcionario.hasMany(Solicitacao_ferias, {
    constraint: true,
    foreignKey: 'idSolicitacao'
})


module.exports = Solicitacao_ferias;