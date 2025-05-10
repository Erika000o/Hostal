const Habitacion = require('../models/habitacion');

const habitacionController = {
  // Obtener todas las habitaciones
  getAllHabitaciones: async (req, res) => {
    try {
      const habitaciones = await Habitacion.findAll();
      res.json({
        success: true,
        data: habitaciones
      });
    } catch (error) {
      console.error('Error en getAllHabitaciones:', error);
      res.status(500).json({
        success: false,
        message: 'Error al obtener las habitaciones',
        error: error.message
      });
    }
  },

  // Obtener una habitación por ID
  getHabitacionById: async (req, res) => {
    try {
      const habitacion = await Habitacion.findByPk(req.params.id);
      if (!habitacion) {
        return res.status(404).json({
          success: false,
          message: 'Habitación no encontrada'
        });
      }
      res.json({
        success: true,
        data: habitacion
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener la habitación',
        error: error.message
      });
    }
  },

  // Crear una nueva habitación
  createHabitacion: async (req, res) => {
    try {
      const habitacion = await Habitacion.create(req.body);
      res.status(201).json({
        success: true,
        data: habitacion
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Error al crear la habitación',
        error: error.message
      });
    }
  },

  // Actualizar una habitación
  updateHabitacion: async (req, res) => {
    try {
      const [updated] = await Habitacion.update(req.body, {
        where: { id: req.params.id }
      });
      if (updated) {
        const updatedHabitacion = await Habitacion.findByPk(req.params.id);
        res.json({
          success: true,
          data: updatedHabitacion
        });
      } else {
        res.status(404).json({
          success: false,
          message: 'Habitación no encontrada'
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Error al actualizar la habitación',
        error: error.message
      });
    }
  },

  // Eliminar una habitación
  deleteHabitacion: async (req, res) => {
    try {
      const deleted = await Habitacion.destroy({
        where: { id: req.params.id }
      });
      if (deleted) {
        res.json({
          success: true,
          message: 'Habitación eliminada correctamente'
        });
      } else {
        res.status(404).json({
          success: false,
          message: 'Habitación no encontrada'
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al eliminar la habitación',
        error: error.message
      });
    }
  }
};


module.exports = habitacionController;
