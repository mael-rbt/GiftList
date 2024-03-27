const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database/connection');
const List = require('./routes/list');
const Item = require('./routes/item');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/list', List);
app.use('/item', Item);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
  });
});
