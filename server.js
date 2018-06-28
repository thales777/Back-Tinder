var configFirebase = require('./config');
var firebase = require('firebase');


//Iniciando o Banco de Dados
var appFirebase = firebase.initializeApp(config);
var database = appFirebase.database();

exports.auth = firebase.auth();
exports.matchs = database.ref('match');
exports.user = database.ref('user')