module.exports = (sequelize, DataTypes) => {
    const Class = sequelize.define('CLASSES', {
      class_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      class_name: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      academic_year: {
        type: DataTypes.TINYINT,
        allowNull: false
      }
    }, {
      tableName: 'CLASSES',
      timestamps: false,
      
    });
    return Class;
  };