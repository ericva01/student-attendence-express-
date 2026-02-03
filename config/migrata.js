const { sequelize, Class, Subject, Teacher, Student, Attendance } = require('../models');

async function migrate() {
  try {
    // Test database connection
    await sequelize.authenticate();
    console.log('✓ Database connection established successfully.');

    await sequelize.sync({ alter: true });
    
    console.log('✓ All models synchronized successfully.');
    console.log('✓ Migration completed!');
    
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

migrate();
