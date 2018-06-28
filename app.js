//Imports

var express = require('express');
var app = express();
var bodyParser = require('body-parser')

//Rotas

var matchRouter = require('./routes/matchs');
var userRouter = require('./Routes/user')

//Configurações do App
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use('/match', matchRouter);
app.use('/user', userRouter )

//Setando a App
app.listen(8080, function () {
    console.log('HTPP// 8080')
})






