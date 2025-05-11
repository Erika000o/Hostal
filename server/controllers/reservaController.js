const reserva = require('../models/reserva'); 
const habitacion = require('../models/habitacion'); 


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

exports.createReserva = async (req, res) => {
  try {
    console.log('Datos recibidos para crear reserva:', req.body);
    const { habitacion_id, nombre_cliente, email, fecha_entrada, fecha_salida } = req.body;

    
    if (!habitacion_id || !nombre_cliente || !email || !fecha_entrada || !fecha_salida) {
      console.log('Faltan campos obligatorios para crear la reserva');
      return res.status(400).json({ error: 'Faltan campos obligatorios para crear la reserva' });
    }

  
    const nuevaReserva = await reserva.create({
      habitacion_id,
      nombre_cliente,
      email,
      fecha_entrada,
      fecha_salida,
    });

    res.status(201).json({
      success: true,
      message: 'Reserva creada correctamente',
      data: nuevaReserva,
    });
  } catch (error) {
    console.error('Error al crear la reserva:', error);
    res.status(500).json({ error: error.message });
  }
};
