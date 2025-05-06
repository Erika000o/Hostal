const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const habitacion = require('./habitacion');

const calendario = sequelize.define('calendario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: DataTypes.DATE,
  estado: DataTypes.ENUM('disponible', 'ocupada', 'mantenimiento'),
  habitacion_id: {
    type: DataTypes.INTEGER,
    references: { model: habitacion, key: 'id' },
  },
}, {
  tableName: 'calendario', // Apunta a la tabla existente
  timestamps: false,
});

// Definir relación
calendario.belongsTo(habitacion, { foreignKey: 'habitacion_id' });

module.exports = calendario;