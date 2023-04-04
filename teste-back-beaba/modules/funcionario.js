const Sequelize = require('sequelize');
const database = require('../dbSequelize');
const Squad = require('./squad')
const bcrypt = require('bcrypt');

const Funcionario = database.define('funcionario', {
    id_matricula:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_nasc: {
        type: Sequelize.DATE,
        allowNull: false
    },
    data_contrato: {
        type: Sequelize.DATE,
        allowNull: false
    },
    regime: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha_padrao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha_atual: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email_pessoal: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email_institucional: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cargo: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


Funcionario.belongsTo(Squad, {
    constraint: true,
    foreignKey: 'idSquad'
})

Squad.hasMany(Funcionario, {
    constraint: true,
    foreignKey: 'idFuncionario'
})

Funcionario.belongsTo(Funcionario, {
    constraint: true,
    foreignKey: 'idGestor'
})

Funcionario.isCorrectPassword = function (senha, callback){
    bcrypt.compare(senha, Funcionario.senha_atual, function(err,same){
        if(err){
            callback(err)
        } else{
            callback(err, same)
        }

    })
}


module.exports = Funcionario;
