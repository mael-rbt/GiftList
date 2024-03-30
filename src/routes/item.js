const express = require("express");
const router = express.Router();
const { Item, List } = require("../database/connection"); // Importer le modèle item

// Route pour réserver un item
router.put("/:id/reserver", async (req, res) => {
  const { id } = req.params;
  try {
    const item = await item.findByPk(id);
    if (!item) {
      return res.status(404).json({ message: "item non trouvé" });
    }
    item.booked = true;
    await item.save();
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Route pour modifier le prix d'un item
router.patch("/:id/modifier-prix", async (req, res) => {
  const { id } = req.params;
  const { price } = req.body;
  try {
    const item = await item.findByPk(id);
    if (!item) {
      return res.status(404).json({ message: "item non trouvé" });
    }
    item.firstPrice = item.price; // Sauvegarder le prix original
    item.price = price; // Mettre à jour le prix
    await item.save();
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});
router.post("/:listId/ajouter-item", async (req, res) => {
  const { listId } = req.params;
  const { name, price, firstPrice } = req.body;
  try {
    // Vérifier si la liste existe
    const list = await List.findByPk(listId);
    if (!list) {
      return res.status(404).json({ message: "Liste non trouvée" });
    }

    // Créer un nouvel item et l'ajouter à la liste
    const newItem = await Item.create({ name, price, firstPrice });
    await list.addItem(newItem);

    res.status(201).json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;
