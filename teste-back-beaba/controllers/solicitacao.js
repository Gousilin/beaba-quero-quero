const Funcionario = require('../modules/funcionario');
const Solicitacao_ferias = require('../modules/solicitacao');

exports.read = (req, res) => {

    Solicitacao_ferias.findAll(req.body).then((data) => {

        res.send(data)

    }).catch((error) => {
        console.log(error)
        res.send(error)
    })
}

exports.readPendentes = (req, res) => {

    const { Op } = require("sequelize");

    Solicitacao_ferias.findAll({
        where: {
            status: {[Op.eq]: "Análise"}
        }, 
        include : [{
            model: Funcionario
        }]
    }).then((data) => {
        res.send(data)

    }).catch((error) => {
        console.log(error)
        res.send(error)
    })
}

exports.readA = (req, res) => {

    const { Op } = require("sequelize");

    Solicitacao_ferias.findAll({
        where: {
            status: {[Op.eq]: "Aprovada"}
        }, 
        include : [{
            model: Funcionario
        }]
    }).then((data) => {

        res.send(data)

    }).catch((error) => {
        console.log(error)
        res.send(error)
    })
}

exports.readR = (req, res) => {

    const { Op } = require("sequelize");

    Solicitacao_ferias.findAll({
        where: {
            status: {[Op.eq]: "Reprovada"}
        }, 
        include : [{
            model: Funcionario
        }]
    }).then((data) => {

        res.send(data)

    }).catch((error) => {
        console.log(error)
        res.send(error)
    })
}

exports.readId = (req, res) => {

    Solicitacao_ferias.findByPk(req.params.id_solicitacao, {
        include : [{
            attributes: ['nome'],
            model: Funcionario
        }]
    }).then((data) => {

        res.send(data)

    }).catch((error) => {
        console.log(error)
        res.send(error)
    })
}

exports.insert = (req, res) => {

    const dados = req.body

    Solicitacao_ferias
        .build(
            dados
        )
        .save()
        .then((data) => {
            res.send(true)
        }).catch((error) => {
            console.log(error)
            res.send(false)
        })
}

exports.update = (req, res) => {

    const dados = req.body

    Solicitacao_ferias
        .update(dados, {
            where: {
                id_solicitacao: req.params.id_solicitacao
            }
        })
        .then((data) => {
            res.send(true)
        }).catch((error) => {
            console.log(error)
            res.send(false)
        });
};

exports.delete = (req, res) => {

    Solicitacao_ferias
        .destroy({
            where: {
                id_solicitacao: req.params.id_solicitacao
            }
        })
        .then((rowDeleted) => {
            res.send(true)
        }, (err) => {
            console.log(err)
            res.send(false)
        })
}