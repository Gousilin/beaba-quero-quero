const Funcionario = require('../modules/funcionario');
const jwt = require('jsonwebtoken');
const Solicitacao_ferias = require('../modules/solicitacao');
const Adiantamento = require('../modules/adiantamento');
const secret = 'mysecrete'



exports.read = (req, res) => {

    Funcionario.findAll(req.body).then((data) => {

        res.send(data)

    }).catch((error) => {
        console.log(error)
        res.send(error)
    })
}

exports.readGestor = (req, res) => {

    const { Op } = require("sequelize");

    Funcionario.findAll({
        where: {
            cargo: {[Op.eq]: "Gestor"}
        }
    }).then((data) => {
        res.send(data)

    }).catch((error) => {
        console.log(error)
        res.send(error)
    })
}

exports.readColaborador = (req, res) => {

    const { Op } = require("sequelize");

    Funcionario.findAll({
        where: {
            cargo: {[Op.eq]: "Colaborador"}
        }
    }).then((data) => {
        res.send(data)

    }).catch((error) => {
        console.log(error)
        res.send(error)
    })
}

exports.readId = (req, res) => {

    console.log(req.params.id_matricula)

    Funcionario.findByPk(req.params.id_matricula).then((data) => {

        res.send(data)

    }).catch((error) => {
        console.log(error)
        res.send(error)
    })
}

exports.insert = (req, res) => {

    const dados = req.body

    Funcionario
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

    Funcionario
        .update(dados, {
            where: {
                id_matricula: req.params.id_matricula
            }
        })
        .then((data) => {
            res.send(true)
            console.log(data)
        }).catch((error) => {
            console.log(error)
            res.send(false)
        });
};

exports.delete = (req, res) => {

    Funcionario
        .destroy({
            where: {
                id_matricula: req.params.id_matricula
            }
        })
        .then((rowDeleted) => {
            res.send(true)
        }, (err) => {
            console.log(err)
            res.send(false)
        })
}

exports.login = (req, res) => {

    const {id_matricula, senha_atual} = req.body;
 
    Funcionario.findOne({ where: {id_matricula: id_matricula, senha_atual: senha_atual, cargo: 'Gestor'}}).then(
        function(user, err){
            if(err){
                console.log(err)
                res.status(200).json({erro: 'Erro no servidor, tente novamente1'})
            } else if (!user){
                res.status(200).json({status:2, erro: 'Erro no login'})
            } else{
                Funcionario.isCorrectPassword(senha_atual, async function (same){
                    if(!same){
                        res.status(200).json({error: 'A senha não confere'})
                    } else {
                        const payload = {id_matricula}
                        const token = jwt.sign(payload, secret, {
                            expiresIn: '24h'
                    })
                        res.cookie('token', token, {httpOnly: true})
                        res.status(200).json({status:1, auth:true, token:token, id_matricula: user.id_matricula, nome: user.nome, cargo: user.cargo})
                    }
                })
            }

        }
        ).catch(
            function(err){
            if(err){
                console.log(err)
                res.status(200).json({erro: "Erro no servidor"})
            } 
        })
}

exports.loginColab = (req, res) => {

    const {id_matricula, senha_atual} = req.body;
 
    Funcionario.findOne({ where: {id_matricula: id_matricula, senha_atual: senha_atual, cargo: 'Colaborador'}}).then(
        function(user, err){
            if(err){
                console.log(err)
                res.status(200).json({erro: 'Erro no servidor, tente novamente1'})
            } else if (!user){
                res.status(200).json({status:2, erro: 'Erro no login'})
            } else{
                Funcionario.isCorrectPassword(senha_atual, async function (same){
                    if(!same){
                        res.status(200).json({error: 'A senha não confere'})
                    } else {
                        const payload = {id_matricula}
                        const token = jwt.sign(payload, secret, {
                            expiresIn: '24h'
                    })
                        res.cookie('token', token, {httpOnly: true})
                        res.status(200).json({status:1, auth:true, token:token, id_matricula: user.id_matricula, nome: user.nome, cargo: user.cargo})
                    }
                })
            }

        }
        ).catch(
            function(err){
            if(err){
                console.log(err)
                res.status(200).json({erro: "Erro no servidor"})
            } 
        })
}

exports.token = (req, res) => {

    const token = req.body.token || req.query.token || req.cookies.token || req.headers['x-access-token'];
    
    if(!token){
        res.json({status:401,msg:'Não autorizado: Token inexistente!'});  
    }else{
        jwt.verify(token, secret, function(err, decoded){
            if(err){
                res.json({status:401,msg:'Não autorizado: Token inválido!'});
            }else{
                res.json({status:200, msg:'Token validado', token:token})
            }
        })
    }

}


exports.destroyToken = (req, res) => {
    const token = req.headers.token;
    if(token){
        res.cookie('token',null,{httpOnly:true});
    }else{
        res.status(401).send("Logout não autorizado!")
    }
    res.send("Sessão finalizada com sucesso!");
    
}