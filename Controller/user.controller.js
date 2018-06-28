var user = require('../server').user

exports.getAll = (req, res, next) => {

    user.orderByKey().once("value", valueToMap => {

        res.json(valueToMap);

    })
}

exports.getAcessoByKey = (req,res,next) => {

    let key = req.params.key;
    console.log("alguma cosia")
    user.child(key).child("acesso").on('value', function(snapshot){
        console.log("PQ")
        res.json(snapshot.val());
      });
};

exports.getByKey = (req, res, next) => {

    let key = req.params.key;
    console.log("hey")
    user.child(key).once("value", valueToMap => {
        res.json(valueToMap)    
    })
}

exports.post = (req, res, next) => {

    var body = req.body;
    if (body) {


        var keyTemp = user.push().key;

        

        user.push(
            {
                key: keyTemp,
                nome: body.nome,
                acesso: body.acesso,
            }
        );

        res.send(body);

    } else {
        res.send(err);
    }

}

exports.put = (req, res, next) => {

    let key = req.params.key;
    var body = req.body;
    if (body) {

        var keyTemp = user.push().key;
        user.child(key).set(
            {
                key: keyTemp,
                nome: body.nome,
                acesso: body.acesso,
            }
        );

        res.send(body);

    } else {
        res.send("ERROR" + relacao)
    }

}

exports.delete = (req, res) => {

    let key = req.params.key;
    user.child(key).remove();
    res.send("Ok")

}