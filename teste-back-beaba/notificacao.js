const Notificacao = require('./modules/notificacao');
const routerNotificacao = require('./routes/notificacao')

const models = [
    './modules/notificacao'
]

exports.init = (app) => {
    app.use('/', routerNotificacao)
}