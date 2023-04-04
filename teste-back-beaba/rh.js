const Rh = require('./modules/rh');
const routerRh = require('./routes/rh')

const models = [
    './modules/rh'
]

exports.init = (app) => {
    app.use('/', routerRh)
}