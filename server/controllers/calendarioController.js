const calendario = require('../models/calendario'); // Importación directa
const habitacion = require('../models/habitacion'); // Importación directa

exports.getAllCalendario = async (req, res) => {
  try {
    console.log('Intentando obtener entradas de calendario...');
    const calendarios = await calendario.findAll({ include: habitacion });
    console.log('Entradas de calendario encontradas:', calendarios);
    res.json(calendarios);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.updateEstado = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado } = req.body;
    const calendarioExistente = await calendario.findByPk(id);
    if (!calendarioExistente) {
      return res.status(404).json({ error: 'Entrada de calendario no encontrada' });
    }
    await calendarioExistente.update({ estado });
    res.json(calendarioExistente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};