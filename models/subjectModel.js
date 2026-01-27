const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Subject = sequelize.define('SUBJECTS', {
  subject_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  subject_name: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'SUBJECTS',
  timestamps: false
});

module.exports = Subject;