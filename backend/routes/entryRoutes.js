const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry');
const auth = require('../middleware/authMiddleware');

// Create entry
router.post('/', auth, async (req, res) => {
  try {
    const { title, content, mood } = req.body;
    if (!title || !content) return res.status(400).json({ message: 'Title and content required' });
    const entry = new Entry({ userId: req.user.id, title, content, mood });
    await entry.save();
    res.json(entry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all entries for user
router.get('/', auth, async (req, res) => {
  try {
    const entries = await Entry.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(entries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single entry
router.get('/:id', auth, async (req, res) => {
  try {
    const entry = await Entry.findOne({ _id: req.params.id, userId: req.user.id });
    if (!entry) return res.status(404).json({ message: 'Not found' });
    res.json(entry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update entry
router.put('/:id', auth, async (req, res) => {
  try {
    const { title, content, mood } = req.body;
    const entry = await Entry.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { title, content, mood },
      { new: true }
    );
    if (!entry) return res.status(404).json({ message: 'Not found or unauthorized' });
    res.json(entry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete entry
router.delete('/:id', auth, async (req, res) => {
  try {
    const entry = await Entry.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!entry) return res.status(404).json({ message: 'Not found or unauthorized' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
