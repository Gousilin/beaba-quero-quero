const Sequelize = require('sequelize');
const database = require('../dbSequelize');
const Solicitacao = require('./solicitacao')

const Notificacao = database.define('notificacao', {
    id_notifica:{
        type: Sequelize.INTEGER,
        autoincrement: true,
        allowNull: false,
        primaryKey: true
    },
    mensagem: {
        type: Sequelize.STRING,
        allowNull: false
    },
    solicitacao_ferias: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Notificacao.belongsTo(Solicitacao, {
    constraint: true,
    foreignKey: 'idSolicitacao'
})

module.exports = Notificacao;