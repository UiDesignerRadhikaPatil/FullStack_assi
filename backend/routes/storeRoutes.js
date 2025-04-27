// backend/routes/storeRoutes.js
const express = require('express');
const Store = require('../models/Store');
const router = express.Router();

// Get all stores
router.get('/', async (req, res) => {
  try {
    const stores = await Store.find();
    res.json(stores);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add new store
router.post('/', async (req, res) => {
  const { name, address, rating } = req.body;

  try {
    const store = new Store({ name, address, rating });
    await store.save();
    res.status(201).json(store);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
