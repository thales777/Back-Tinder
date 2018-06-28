var express = require('express')

const router = express.Router();

const controller = require('../Controller/user.controller');


router.get('/', controller.getAll);

router.get('/:key', controller.getByKey); 

router.get('/acesso/:key', controller.getAcessoByKey);

router.post('/', controller.post);

router.put('/:key', controller.put);

router.delete('/:key', controller.delete);






module.exports = router;