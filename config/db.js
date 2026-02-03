const { Sequelize } = require("sequelize");
require('dotenv').config();
console.log('DB_DIALECT:', process.env.DB_DIALECT);
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
  },
);

// TEST connection
sequelize
  .authenticate()
  .then(() => console.log("Sequelize connected.."))
  .catch((err) => console.log("DB Error: ", err));

module.exports = sequelize;