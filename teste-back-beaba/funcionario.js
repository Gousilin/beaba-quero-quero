const Funcionario = require('./modules/funcionario');
const routerFuncionario = require('./routes/funcionario')

const models = [
    './modules/funcionario'
]

exports.init = (app) => {
    app.use('/', routerFuncionario)
}