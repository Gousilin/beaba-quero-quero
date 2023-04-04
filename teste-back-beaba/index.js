(async () => {
    const database = require('./dbSequelize');
    const Adiantamento = require('./modules/adiantamento');
    const Funcionario = require('./modules/funcionario');
    const Notificacao = require('./modules/notificacao');
    const Rh = require('./modules/rh');
    const Squad = require('./modules/squad');
    const Solicitacao_ferias = require('./modules/solicitacao');

    await database.sync();

    

    //getFuncionario.nome = ''

    //const updateFuncionario = await getFuncionario.save();
    //console.log(updateFuncionario);

    //Funcionario.destroy({ where: { id: '1' }});

})();