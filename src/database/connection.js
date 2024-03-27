const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('giftlist', 'gift', 'Sab1XP7MgeRv3Tm', {
  host: 'postgres',
  dialect: 'postgres',
});

// Définir les associations entre les tables
const ListModel = require('../models/List.js')(sequelize);
const ItemModel = require('../models/Item.js')(sequelize);

ListModel.hasMany(ItemModel);
ItemModel.belongsTo(ListModel);

module.exports = sequelize;
