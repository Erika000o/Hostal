const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const usuario = sequelize.define('usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: DataTypes.STRING,
  nombre: DataTypes.STRING,
  created_at: DataTypes.DATE,
}, {
  tableName: 'usuarios', // Apunta a la tabla existente
  timestamps: false,
});

module.exports = usuario;