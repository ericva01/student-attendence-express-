const sequelize = require('../config/db.js');

// Import all models
const Class = require('./classModel');
const Subject = require('./subjectModel');
const Teacher = require('./teacherModel');
const Student = require('./studentModel');
const Attendance = require('./attendanceModel');

// Define associations
Student.belongsTo(Class, {
  foreignKey: 'class_id',
  as: 'class'
});

Class.hasMany(Student, {
  foreignKey: 'class_id',
  as: 'students'
});

Attendance.belongsTo(Teacher, {
  foreignKey: 'teacher_id',
  as: 'teacher'
});

Teacher.hasMany(Attendance, {
  foreignKey: 'teacher_id',
  as: 'attendances'
});

Attendance.belongsTo(Student, {
  foreignKey: 'student_id',
  as: 'student'
});

Student.hasMany(Attendance, {
  foreignKey: 'student_id',
  as: 'attendances'
});

Attendance.belongsTo(Subject, {
  foreignKey: 'subject_id',
  as: 'subject'
});

Subject.hasMany(Attendance, {
  foreignKey: 'subject_id',
  as: 'attendances'
});

const db = {
  sequelize,
  Class,
  Subject,
  Teacher,
  Student,
  Attendance
};

module.exports = db;