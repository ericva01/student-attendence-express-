const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "student_attendents_db", // DB name
  "root", // DB user
  "", // DB password
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  },
);

// TEST connection
sequelize
  .authenticate()
  .then(() => console.log("Sequelize connected.."))
  .catch((err) => console.log("DB Error: ", err));

module.exports = sequelize;
