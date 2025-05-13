const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

router.get('/', reservaController.getAllReservas);
router.post('/', reservaController.createReserva);
router.delete('/:id', reservaController.deleteReservaById);
router.get('/habitacion/:habitacion_id', reservaController.getReservasByHabitacionId);

module.exports = router;

