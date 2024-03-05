const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const GiftList = sequelize.define('GiftList', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  items: {
    type: DataTypes.JSONB,
    defaultValue: [],
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = GiftList;
