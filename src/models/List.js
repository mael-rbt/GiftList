const { sequelize } = require("../database/connection");
const { DataTypes } = require("sequelize");

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

module.exports = List;
