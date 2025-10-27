// Routes for contact form
const express = require('express');
const router = express.Router();
const { submitContact, getAllContacts } = require('../controllers/contactController');

// POST /api/contact - Submit contact form
router.post('/', submitContact);

// GET /api/contact - Get all contacts (admin use)
router.get('/', getAllContacts);

module.exports = router;

