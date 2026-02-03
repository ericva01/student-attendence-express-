module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('STUDENTS', {
      student_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      first_name: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      gender: {
        type: DataTypes.CHAR(1),
        allowNull: false
      },
      date_of_birth: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      class_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'STUDENTS',
      timestamps: false
    });
    return Student;
  };