
const reserva = require('../models/reserva'); // Importación directa
const habitacion = require('../models/habitacion'); // Importación directa

exports.getAllReservas = async (req, res) => {
  try {
    console.log('Intentando obtener reservas...');
    const reservas = await reserva.findAll({ include: habitacion });
    console.log('Reservas encontradas:', reservas);
    res.json(reservas);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.createReserva = async (req, res) => {
  try {
    const { habitacion_id, nombre_cliente, email, fecha_entrada, fecha_salida } = req.body;
    // Verificar si la habitación existe
    const habitacionExistente = await habitacion.findByPk(habitacion_id);
    if (!habitacionExistente) {
      return res.status(404).json({ error: 'Habitación no encontrada' });
    }
    const nuevaReserva = await reserva.create({ habitacion_id, nombre_cliente, email, fecha_entrada, fecha_salida });
    res.status(201).json(nuevaReserva);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};