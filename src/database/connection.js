// Importer Sequelize
const { Sequelize, DataTypes } = require("sequelize");

// Initialiser Sequelize
const sequelize = new Sequelize("lucie_giftlist", "lucie", "frite151", {
  host: "185.193.17.146",
  dialect: "mysql",
});

// Définir le modèle de la table Listes
const List = sequelize.define("List", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// Définir les associations entre les tables
const Item = sequelize.define("Item", {
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

List.hasMany(Item);
Item.belongsTo(List);

module.exports = {
  List: List,
  Item: Item,
  sequelize: sequelize,
};
