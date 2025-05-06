const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const habitacion = require('./habitacion');

const reserva = sequelize.define('reserva', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  habitacion_id: {
    type: DataTypes.INTEGER,
    references: { model: habitacion, key: 'id' },
  },
  nombre_cliente: DataTypes.STRING,
  email: DataTypes.STRING,
  fecha_entrada: DataTypes.DATE,
  fecha_salida: DataTypes.DATE,
}, {
  tableName: 'reservas', // Apunta a la tabla existente
  timestamps: false,
});

// Definir relación
reserva.belongsTo(habitacion, { foreignKey: 'habitacion_id' });

module.exports = reserva;