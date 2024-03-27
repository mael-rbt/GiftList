// Importer Sequelize
const Sequelize = require('sequelize');

// Définir le modèle de la table Listes
module.exports = function (sequelize) {
  const List = sequelize.define('List', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    birthday: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });

  return List;
};