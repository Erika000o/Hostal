const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

router.get('/reservas', reservaController.getAllReservas);
router.post('/reservas', reservaController.createReserva);

module.exports = router;