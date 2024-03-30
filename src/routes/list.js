const express = require("express");
const router = express.Router();
const List = require("../models/List");
const Item = require("../models/Item");

// Route pour afficher toutes les lists
router.get("/", async (req, res) => {
  try {
    const lists = await List.findAll();
    //res.json(lists);
    res.render("lists.ejs", { lists: lists });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Route pour afficher le détail d"une list
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const list = await List.findByPk(id, { include: Item });
    if (!list) {
      return res.status(404).json({ message: "List non trouvée" });
    }
    //res.json(list);
    res.render("list.ejs", { list: list });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Route pour créer une nouvelle list
router.post("/", async (req, res) => {
  const { name, birthday } = req.body;
  try {
    await List.create({ name, birthday });
    res.redirect("/list?addSuccess=true");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
});

// Route pour supprimer une list
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const list = await List.findByPk(id);
    if (!list) {
      return res.status(404).json({ message: "List non trouvée" });
    }
    await list.destroy();
    res.redirect("/list?deleteSuccess=true");
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;
