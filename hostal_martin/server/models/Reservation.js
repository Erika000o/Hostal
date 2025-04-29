const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Reservation = sequelize.define('Reservation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  checkIn: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  checkOut: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  roomType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'confirmed', 'cancelled'),
    defaultValue: 'pending',
  },
});

Reservation.belongsTo(User);
User.hasMany(Reservation);

module.exports = Reservation;