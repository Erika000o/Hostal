const reserva = require('../models/reserva'); // Importación directa
const habitacion = require('../models/habitacion'); // Importación directa

// ... funciones existentes ...

exports.deleteReservaByHabitacionId = async (req, res) => {
  try {
    const { habitacion_id } = req.params;
    const deleted = await reserva.destroy({ where: { habitacion_id } });
    if (deleted) {
      res.json({ success: true, message: 'Reservas eliminadas correctamente' });
    } else {
      res.status(404).json({ error: 'No se encontraron reservas para la habitación' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllReservas = async (req, res) => {
  try {
    const reservas = await reserva.findAll({ include: habitacion });
    res.json({
      success: true,
      data: reservas
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getReservasByHabitacionId = async (req, res) => {
  try {
    const { habitacion_id } = req.params;
    const reservas = await reserva.findAll({ where: { habitacion_id }, include: habitacion });
    if (reservas.length === 0) {
      return res.status(404).json({ error: 'No se encontraron reservas para esta habitación' });
    }
    res.json({
      success: true,
      data: reservas
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.crearReserva = async (req, res) => {
  try {
    const { habitacion_id, cliente, fecha_inicio, fecha_fin } = req.body;

    const nuevaReserva = await reserva.create({
      habitacion_id,
      cliente,
      fecha_inicio,
      fecha_fin
    });

    res.status(201).json({
      success: true,
      data: nuevaReserva
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
