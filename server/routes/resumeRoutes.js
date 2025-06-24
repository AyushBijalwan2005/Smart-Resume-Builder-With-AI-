const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');

router.post('/create', async (req, res) => {
  try {
    const resume = new Resume(req.body);
    await resume.save();
    res.status(201).json(resume);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    res.json(resume);
  } catch (err) {
    res.status(404).json({ error: 'Resume not found' });
  }
});

module.exports = router;