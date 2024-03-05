const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database/connection');
const giftListRoutes = require('./routes/giftListRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/gift-lists', giftListRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
  });
});
