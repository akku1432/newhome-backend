// Portfolio routes
const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

// Public routes
router.get('/', portfolioController.getAllPortfolio);
router.get('/:id', portfolioController.getPortfolioById);

// Admin routes (add authentication middleware in production)
router.post('/', portfolioController.createPortfolio);
router.put('/:id', portfolioController.updatePortfolio);
router.delete('/:id', portfolioController.deletePortfolio);

module.exports = router;

