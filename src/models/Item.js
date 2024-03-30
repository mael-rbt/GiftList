const { sequelize } = require("../database/connection");
const { DataTypes } = require("sequelize");

const Item = sequelize.define("Item", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  firstPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  booked: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = Item;
