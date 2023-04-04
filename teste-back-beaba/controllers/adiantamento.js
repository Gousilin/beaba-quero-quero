
const Adiantamento = require('../modules/adiantamento');

exports.read = (req, res) => {

    Adiantamento.findAll(req.body).then((data) => {

        res.send(data)

    }).catch((error) => {
        console.log(error)
        res.send(error)
    })
}

exports.readId = (req, res) => {

    console.log(req.params.id_adianta)

    Adiantamento.findByPk(req.params.id_adianta).then((data) => {

        res.send(data)

    }).catch((error) => {
        console.log(error)
        res.send(error)
    })
}

exports.insert = (req, res) => {

    const dados = req.body

    Adiantamento
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

    Adiantamento
        .update(dados, {
            where: {
                id_adianta: req.params.id_adianta
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

    Adiantamento
        .destroy({
            where: {
                id_adianta: req.params.id_adianta
            }
        })
        .then((rowDeleted) => {
            res.send(true)
        }, (err) => {
            console.log(err)
            res.send(false)
        })
}