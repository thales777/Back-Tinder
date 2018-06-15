var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var configFirebase = require('./config');
var firebase = require('firebase');
var id = express();

var appFirebase = firebase.initializeApp(config);
var database = appFirebase.database();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

var matchs = database.ref('match');

app.get('/match', function (req, res) {

    console.log("Test")
    matchs.orderByKey().once("value", valueToMap => {
        try {
            valueToMap = valueToMap.toJSON();
            res.send(valueToMap);
          } catch (e) {
            res.status(400).send('Errou');
          }
        // valueToMap = valueToMap.toJSON();
        // res.send(valueToMap);

    })
})

app.get(['/', '/:key'], function (req, res) {

    console.log("test")
    let key = req.params.key;
    matchs.child(key).once("value", valueToMap => {
        valueToMap = valueToMap.toJSON();
        console.log(valueToMap)
        res.send(valueToMap)

    })
})


app.post('/match', function (err, req, res, next
){

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
});

app.put(['/', '/:key'], function (req, res
){

    let key = req.params.key;
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

});

app.delete(['/', '/:key'], function (req, res) {

    let key = req.params.key;
    matchs.child(key).remove();
    res.send("Ok")

})

app.listen(8080, function () {
    console.log('HTPP// 8080')
})







