const Solicitacao_ferias = require('./modules/solicitacao');
const routerSolicitacao = require('./routes/solicitacao')

const models = [
    './modules/solicitacao'
]

exports.init = (app) => {
    app.use('/', routerSolicitacao)
}