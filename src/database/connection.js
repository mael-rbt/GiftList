const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: "postgres",
  dialect: "postgres",
  port: 5432
});



async function syncModels() {
  try {
    await sequelize.sync();
    console.log("Modèles synchronisés avec la base de données.");
  } catch (error) {
    console.error("Erreur lors de la synchronisation des modèles avec la base de données:", error);
  }
}

syncModels();

module.exports = {
  sequelize: sequelize,
};
