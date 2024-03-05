const express = require('express');
const router = express.Router();
const GiftList = require('../models/GiftList');

// Ajout d'une liste
router.post('/add-list', async (req, res) => {
  const newListData = req.body;

  try {
    const newList = await GiftList.create(newListData);
    res.json({ message: 'Liste ajoutée avec succès', list: newList });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout de la liste', error: error.message });
  }
});

// Modification d'une liste
router.put('/update-list/:id', async (req, res) => {
  const listId = req.params.id;
  const updatedListData = req.body;

  try {
    const [_, updatedList] = await GiftList.update(updatedListData, {
      where: { id: listId },
      returning: true,
    });
    res.json({ message: 'Liste mise à jour avec succès', list: updatedList[0] });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la liste', error: error.message });
  }
});

// Suppression d'une liste
router.delete('/delete-list/:id', async (req, res) => {
  const listId = req.params.id;

  try {
    await GiftList.destroy({ where: { id: listId } });
    res.json({ message: 'Liste supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de la liste', error: error.message });
  }
});

module.exports = router;
