const express = require("express");
const methodOverride = require("method-override");
const List = require("./routes/list");
const Item = require("./routes/item");
const ListModel = require("./models/List.js");
const ItemModel = require("./models/Item");
const path = require("path");
const ejs = require("ejs");

const app = express();
const port = 3000;

ListModel.hasMany(ItemModel);
ItemModel.belongsTo(ListModel);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use("/list", List);
app.use("/item", Item);

app.engine(".ejs", ejs.__express);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
