var express = require('express')
var matchs = require('../app')
var firebase = require('firebase')
var bodyParser = require('body-parser')

const router = express.Router();


router.get('/', (req, res) => {

    matchs.orderByChild(matchs.key).once("value", valueToMap => {
        
            valueToMap = valueToMap.toJSON();
            res.send(valueToMap);

    })
})

// router.get('/', (req, res) => {

//     matchs.orderByKey().once("value", valueToMap => {

//         valueToMap = valueToMap.toJSON();
//         res.send(valueToMap)

            
//     })
// })


module.exports = router;


// app.get(['/', '/:key'], function (req, res) {

//     let key = req.params.key;
//     matchs.child(key).once("value", valueToMap => {
//         valueToMap = valueToMap.toJSON();
//         console.log(valueToMap)
//         res.send(valueToMap)

//     })
// })


// app.post('/match', function (err, req, res, next
// ){

//     var relacao = req.body;
//     if (relacao) {


//         var keyTemp = matchs.push().key;
//         matchs.push(
//             {
//                 key: keyTemp,
//                 keyOrigem: relacao.keyOrigem,
//                 keyDestino: relacao.keyDestino,
//                 status: relacao.status,
//             }
//         );

//         res.send(relacao);

//     } else {
//         res.send(err);
//     }
// });

// app.put(['/', '/:key'], function (req, res
// ){

//     let key = req.params.key;
//     var relacao = req.body;
//     if (relacao) {

//         var keyTemp = matchs.push().key;
//         matchs.child(key).set(
//             {
//                 key: keyTemp,
//                 keyOrigem: relacao.keyOrigem,
//                 keyDestino: relacao.keyDestino,
//                 status: relacao.status,
//             }
//         );

//         res.send(relacao);

//     } else {
//         res.send("ERROR" + relacao)
//     }

// });

// app.delete(['/', '/:key'], function (req, res) {

//     let key = req.params.key;
//     matchs.child(key).remove();
//     res.send("Ok")
// })
