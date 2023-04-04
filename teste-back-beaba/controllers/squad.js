const Squad = require('../modules/squad');

exports.read = (req, res) => {

    Squad.findAll(req.body).then((data) => {

        res.send(data)

    }).catch((error) => {
        console.log(error)
        res.send(error)
    })
}

exports.readId = (req, res) => {

    Squad.findByPk(req.params.id_squad).then((data) => {
        res.send(data)

    }).catch((error) => {
        console.log(error)
        res.send(error)
    })
}

exports.insert = (req, res) => {

    const dados = req.body

    Squad
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

    Squad
        .update(dados, {
            where: {
                id_squad: req.params.id_squad
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

    const dados = req.body

    Squad
        .destroy({
            where: {
                id_squad: dados.params.id_squad
            }
        })
        .then((rowDeleted) => {
            res.send(true)
        }, (err) => {
            console.log(err)
            res.send(false)
        })
}