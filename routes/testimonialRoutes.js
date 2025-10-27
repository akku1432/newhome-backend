// Routes for testimonials
const express = require('express');
const router = express.Router();
const { getTestimonials, createTestimonial } = require('../controllers/testimonialController');

// GET /api/testimonials - Get all testimonials
router.get('/', getTestimonials);

// POST /api/testimonials - Create new testimonial (admin use)
router.post('/', createTestimonial);

module.exports = router;

