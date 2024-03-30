// Importer Sequelize
const Sequelize = require("sequelize");

const sequelize = require("../database/connection.js");

// Définir le modèle de la table Cadeaux
module.exports = function (sequelize) {
  const Item = sequelize.define("Items", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    firstPrice: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    booked: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  return Item;
};
