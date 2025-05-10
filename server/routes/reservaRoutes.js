const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

router.get('/', reservaController.getAllReservas);
router.post('/', reservaController.createReserva);

module.exports = router;
