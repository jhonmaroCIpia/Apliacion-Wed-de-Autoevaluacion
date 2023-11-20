import { Sequelize } from "sequelize";

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('autoevaluaciones', 'user', '#admin1234', {
    host: 'localhost',
    dialect: 'mysql'
  });

export default sequelize;