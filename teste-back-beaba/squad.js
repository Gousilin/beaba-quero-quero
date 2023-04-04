const Squad = require('./modules/squad');
const routerSquad = require('./routes/squad')

const models = [
    './modules/squad'
]

exports.init = (app) => {
    app.use('/', routerSquad)
}