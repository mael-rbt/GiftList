// Importer Sequelize
const Sequelize = require('sequelize');

// Définir le modèle de la table Cadeaux
module.exports = function (sequelize) {
  const Item = sequelize.define('Item', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    firstPrice: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    booked: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  return Item;
};
