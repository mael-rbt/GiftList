const express = require("express");
const router = express.Router();
const List = require("../models/List");
const Item = require("../models/Item");

// Route pour réserver un item
router.post("/:id/reserver", async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findByPk(id);
    if (!item) {
      return res.status(404).json({ message: "Item non trouvé" });
    }
    item.booked = true;
    await item.save();
    res.redirect("/list/"+id);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Route pour modifier le prix d"un item
router.post("/:id/modifier-prix", async (req, res) => {
  const { id } = req.params;
  const { price } = req.body;
  try {
    const item = await Item.findByPk(id);
    if (!item) {
      return res.status(404).json({ message: "Item non trouvé" });
    }
    item.firstPrice = item.price; // Sauvegarder le prix original
    item.price = price; // Mettre à jour le prix
    await item.save();
    res.redirect("/list/"+id);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Route pour ajouter un nouvel item à la liste
router.post("/:listId/ajouter-item", async (req, res) => {
  const { listId } = req.params;
  const { name, price } = req.body;
  const firstPrice = price;
  try {
    const list = await List.findByPk(listId);
    if (!list) {
      return res.status(404).json({ message: "Liste non trouvée" });
    }

    const newItem = await Item.create({ name, price, firstPrice });
    await list.addItem(newItem);

    res.redirect("/list/"+listId);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;
