const { Sequelize } = require("sequelize");


const sequelize = new Sequelize("giftlist", "gift", "Sab1XP7MgeRv3Tm", {
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
  syncModels: syncModels
};
