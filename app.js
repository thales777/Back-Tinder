//Imports

var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var configFirebase = require('./config');
var firebase = require('firebase');

//Rotas

var matchRouter = require('./routes/matchs');

//Iniciando o Banco de Dados
var appFirebase = firebase.initializeApp(config);
var database = appFirebase.database();

//Configurações do App
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

//Criando uma tabela
var matchs = database.ref('match');

//Inicia a rota quando chamado
app.use('/match', matchRouter);

//Setando a App
app.listen(8080, function () {
    console.log('HTPP// 8080')
})

//Exports

module.exports = matchs;






