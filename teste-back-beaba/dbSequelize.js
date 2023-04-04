const Sequelize = require('sequelize');
const sequelize = new Sequelize('980173', '980173', '980173', {
    host: 'qqtech4.crqc50gxdjpu.sa-east-1.rds.amazonaws.com',
    dialect: 'postgresql',
    schema: 'QQFerias'
})

sequelize.authenticate()
.then(function(){
    console.log('Conectado...');
    })
    .catch(function(){
        console.log('Não foi possível conectar...');
    });

module.exports = sequelize;