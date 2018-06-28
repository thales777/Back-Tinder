var user = require('../server').user
var auth = require('../server').auth

//Hash Senha
var bcrypt = require('bcrypt')
const saltRounds = 10;

exports.getAll = (req, res, next) => {

    user.orderByKey().once("value", valueToMap => {

        res.json(valueToMap);

    })
}

exports.index = (req, res, next) => {

    res.render('index.html')

}

exports.post = (req, res) => {
    
    req.checkBody('email', 'Email não pode ser vazio').notEmpty();
    req.checkBody('email', 'Email tem que ser valido').isEmail();
    req.checkBody('password', 'Senha não pode ser vazio').notEmpty();
    req.checkBody('password', 'Senha precisa ter entre 6 a 10 caracteres').len(6,10);

    const err = req.validationErrors();

    if(err){
        console.log(`err: ${JSON.stringify(err)}`);
        res.render('index.html')
    } else {
        
        const email = req.body.email;
        const password = req.body.password;
        
        var keyTemp = user.push().key;   

        bcrypt.hash(password, saltRounds, function(err, hash) {
            
            user.push(
                {
                    key: keyTemp,
                    email: email,
                    password: hash,
                }
            );  
            auth.createUserWithEmailAndPassword(email, password).catch(e => console.log(e.message));

        })       
        res.send(req.body);
    }
}   

exports.delete = (req, res) => {

    let key = req.params.key;
    user.child(key).remove();
    res.send("Ok")

}