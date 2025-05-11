const express = require('express');
const router = express.Router();
const calendarioController = require('../controllers/calendarioController');

router.get('/', calendarioController.getAllCalendario);
router.put('/:id', calendarioController.updateEstado);
router.post('/', calendarioController.createReserva);
router.post('/', calendarioController.createReserva);
router.post('/', calendarioController.createReserva);


module.exports = router;
