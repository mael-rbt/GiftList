const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./database/connection");
const List = require("./routes/list");
const Item = require("./routes/item");
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/list", List);
app.use("/item", Item);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
