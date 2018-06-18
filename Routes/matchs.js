var express = require('express')

const router = express.Router();

const controller = require('../Controller/matchs.controller')


router.get('/', controller.getAll);

router.get('/:key', controller.getById)

router.post('/', controller.post);

router.put('/:key', controller.put);

router.delete('/:key', controller.delete);






module.exports = router;
