var user = require('../server').user
var expressValidator = require('express-validator');


exports.getAll = (req, res, next) => {

    user.orderByKey().once("value", valueToMap => {

        res.json(valueToMap);

    })
}

exports.index = (req, res, next) => {

    res.render('index.html')

}

exports.post = (req, res) => {
    
    req.checkBody('username', 'Username cannot is Empty').notEmpty();

    const err = req.validationErrors();

    if(err){
        console.log("errou")
        res.render('index.html')
    } else {
        
        const username = req.body.username;
        const password = req.body.password;
        

        var keyTemp = user.push().key;   

        user.push(
            {
                key: keyTemp,
                username: username,
                password: password,
                //acesso: body.acesso
            }
        );        
        res.send(req.body);
    }
        
}

exports.delete = (req, res) => {

    let key = req.params.key;
    user.child(key).remove();
    res.send("Ok")

}