const Notificacao = require('../modules/notificacao');

exports.read = (req, res) => {

    Notificacao.findAll(req.body).then((data) => {

        res.send(data)

    }).catch((error) => {
        console.log(error)
        res.send(error)
    })
}

exports.readId = (req, res) => {

    console.log(req.params.id_notifica)

    Notificacao.findByPk(req.params.id_notifica).then((data) => {

        res.send(data)

    }).catch((error) => {
        console.log(error)
        res.send(error)
    })
}

exports.insert = (req, res) => {

    const dados = req.body

    Notificacao
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

    Notificacao
        .update(dados, {
            where: {
                id_notifica: req.params.id_notifica
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

    Notificacao
        .destroy({
            where: {
                id_notifica: req.params.id_notifica
            }
        })
        .then((rowDeleted) => {
            res.send(true)
        }, (err) => {
            console.log(err)
            res.send(false)
        })
}