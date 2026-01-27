const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Attendance = sequelize.define('ATTENDENTS', {
  att_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  teacher_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  subject_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  att_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  att_status: {
    type: DataTypes.TINYINT,
    allowNull: false
  }
}, {
  tableName: 'ATTENDENTS',
  timestamps: false
});

module.exports = Attendance;