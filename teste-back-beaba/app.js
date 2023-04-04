const bodyparser = require('body-parser');
const Adiantamento = require('./adiantamento');
const Funcionario = require('./funcionario');
const Notificacao = require('./notificacao');
const Rh = require('./rh')
const Squad = require('./squad')
const Solicitacao_ferias = require('./solicitacao')
const port = 3333;

const cors = require('cors')
const cookieParser = require('cookie-parser');

const express = require ('express');
const app = express();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))

app.get('/', function(req,res){
    res.send('<h1>Conexão estabelecida</h1>')
});

app.listen(port, ()=>{
    console.log('Servidor rodando...')
});

app.use(cors())
app.use(cookieParser())

Adiantamento.init(app)
Funcionario.init(app)
Rh.init(app)
Solicitacao_ferias.init(app)
Squad.init(app)
Notificacao.init(app)
