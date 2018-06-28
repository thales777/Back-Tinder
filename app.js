//Imports

var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var expressValidator = require('express-validator');

//Html config
var engine = require('consolidate');

app.set('views', __dirname + '/views');
app.engine('html', engine.mustache);
app.set('view engine', 'html');

//Rotas

var matchRouter = require('./Routes/matchs');
var userRouter = require('./Routes/user')

//Configurações do App
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressValidator())

app.use(bodyParser.json())

app.use('/match', matchRouter);
app.use('/user', userRouter )

//Setando a App
app.listen(8080, function () {
    console.log('HTPP// 8080')
})






