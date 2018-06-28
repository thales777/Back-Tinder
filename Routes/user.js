var express = require('express')

const router = express.Router();

const controller = require('../Controller/user.controller');



router.get('/', controller.getAll);

router.get('/index', controller.index);

router.post('/index', controller.post);

router.delete('/:key', controller.delete);






module.exports = router;