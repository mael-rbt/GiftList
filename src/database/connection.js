const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('giftlist', 'gift', 'Sab1XP7MgeRv3Tm', {
  host: 'postgres',
  dialect: 'postgres',
});

module.exports = sequelize;
