// Importer Sequelize
const Sequelize = require("sequelize");
// Définir le modèle de la table Listes
const List = (sequelize) => {
  const ListModel = sequelize.define("Lists", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    birthday: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });

  return ListModel;
};

module.exports = List;
