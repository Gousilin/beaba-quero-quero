const Adiantamento = require('./modules/adiantamento');
const routerAdiantamento = require('./routes/adiantamento')

const models = [
    './modules/adiantamento'
]

exports.init = (app) => {
    app.use('/', routerAdiantamento)
}