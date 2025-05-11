const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const habitacion = sequelize.define('habitacion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: DataTypes.STRING,
  descripcion_es: DataTypes.TEXT,
  precio: DataTypes.DECIMAL(10, 2),

  disponible: {
  type: DataTypes.BOOLEAN,
  defaultValue: true,
},

},


{
  tableName: 'habitaciones', // Apunta a la tabla existente
  timestamps: false, // No crear columnas automáticas
});

module.exports = habitacion;