var matchs = require('../server').matchs

exports.getAll = (req, res, next) => {

    matchs.orderByKey().once("value", valueToMap => {

        res.json(valueToMap);

    })
}

exports.getByKey = (req, res, next) => {

    let key = req.params.key;
    console.log("hey")
    matchs.child(key).once("value", valueToMap => {
        res.json(valueToMap)
    
    })
}

exports.post = (req, res, next) => {

    var body = req.body;
    if (body) {


        var keyTemp = matchs.push().key;

        

        matchs.push(
            {
                key: keyTemp,
                keyOrigem: body.keyOrigem,
                keyDestino: body.keyDestino,
                status: body.status,
            }
        );

        status = matchs.child("status")

        res.send(body);

    } else {
        res.send(err);
    }

}

exports.put = (req, res, next) => {

    let key = req.params.key;
    var body = req.body;
    if (body) {

        var keyTemp = matchs.push().key;
        matchs.child(key).set(
            {
                key: keyTemp,
                keyOrigem: body.keyOrigem,
                keyDestino: body.keyDestino,
                status: body.status,
            }
        );

        res.send(body);

    } else {
        res.send("ERROR" + relacao)
    }

}

exports.delete = (req, res) => {

    let key = req.params.key;
    matchs.child(key).remove();
    res.send("Ok")

}
