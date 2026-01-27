const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Teacher = sequelize.define('TEACHERS', {
  teacher_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  teacher_name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  phone_number: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'TEACHERS',
  timestamps: false
});

module.exports = Teacher;