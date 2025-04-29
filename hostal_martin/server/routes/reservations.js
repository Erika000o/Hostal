const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

// Crear reserva
router.post('/', async (req, res) => {
  try {
    const { checkIn, checkOut, roomType, userId } = req.body;
    const reservation = await Reservation.create({
      checkIn,
      checkOut,
      roomType,
      UserId: userId,
    });
    res.status(201).json({ message: 'Reserva creada', reservation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todas las reservas
router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.findAll();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;