var matchs = require('../app')

var configFirebase = require('../config');
var firebase = require('firebase');


//Iniciando o Banco de Dados
var appFirebase = firebase.initializeApp(config);
var database = appFirebase.database();


//Criando uma tabela
var matchs = database.ref('match');

exports.getAll = (req, res, next) => {

    matchs.orderByKey().once("value", valueToMap => {
            
        valueToMap = valueToMap.toJSON();
        res.send(valueToMap);

    }
)}

exports.getById = (req, res, next) => {

    let key = req.params.key;
    console.log(key)
    matchs.child(key).once("value", valueToMap => {
        valueToMap = valueToMap.toJSON();
        res.send(valueToMap)

    })
}
exports.post = (req, res, next) => {

    var relacao = req.body;
    if (relacao) {


        var keyTemp = matchs.push().key;
        matchs.push(
            {
                key: keyTemp,
                keyOrigem: relacao.keyOrigem,
                keyDestino: relacao.keyDestino,
                status: relacao.status,
            }
        );

        res.send(relacao);

    } else {
        res.send(err);
    }

}

exports.put =  (req, res, next) => {

    console.log("Entrou")
    let key = req.params.key;
    console.log(key)
    var relacao = req.body;
    if (relacao) {

        var keyTemp = matchs.push().key;
        matchs.child(key).set(
            {
                key: keyTemp,
                keyOrigem: relacao.keyOrigem,
                keyDestino: relacao.keyDestino,
                status: relacao.status,
            }
        );

        res.send(relacao);

    } else {
        res.send("ERROR" + relacao)
    }

}

exports.delete =  (req, res) => {

    let key = req.params.key;
    matchs.child(key).remove();
    res.send("Ok")

}