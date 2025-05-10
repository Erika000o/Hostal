const express = require('express');
const router = express.Router();
const habitacionController = require('../controllers/habitacionController');
const { authenticateToken } = require('../middleware/auth');

// Rutas públicas
router.get('/', habitacionController.getAllHabitaciones);
router.get('/:id', habitacionController.getHabitacionById);

// Rutas protegidas (requieren autenticación)
router.post('/', authenticateToken, habitacionController.createHabitacion);
router.put('/:id', authenticateToken, habitacionController.updateHabitacion);
router.delete('/:id', authenticateToken, habitacionController.deleteHabitacion);


module.exports = router;