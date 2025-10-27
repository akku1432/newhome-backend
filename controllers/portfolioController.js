// Portfolio controller for handling portfolio-related operations
const Portfolio = require('../models/Portfolio');

// Get all active portfolio items
exports.getAllPortfolio = async (req, res) => {
  try {
    const { category, featured } = req.query;
    
    let query = { isActive: true };
    
    // Filter by category if provided
    if (category) {
      query.category = category;
    }
    
    // Filter by featured if provided
    if (featured) {
      query.featured = featured === 'true';
    }
    
    const portfolioItems = await Portfolio.find(query)
      .sort({ featured: -1, order: 1, createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: portfolioItems.length,
      data: portfolioItems
    });
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch portfolio items',
      error: error.message
    });
  }
};

// Get single portfolio item by ID
exports.getPortfolioById = async (req, res) => {
  try {
    const portfolioItem = await Portfolio.findById(req.params.id);
    
    if (!portfolioItem) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio item not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: portfolioItem
    });
  } catch (error) {
    console.error('Error fetching portfolio item:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch portfolio item',
      error: error.message
    });
  }
};

// Create new portfolio item (admin)
exports.createPortfolio = async (req, res) => {
  try {
    const portfolioItem = await Portfolio.create(req.body);
    
    res.status(201).json({
      success: true,
      message: 'Portfolio item created successfully',
      data: portfolioItem
    });
  } catch (error) {
    console.error('Error creating portfolio item:', error);
    res.status(400).json({
      success: false,
      message: 'Failed to create portfolio item',
      error: error.message
    });
  }
};

// Update portfolio item (admin)
exports.updatePortfolio = async (req, res) => {
  try {
    const portfolioItem = await Portfolio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!portfolioItem) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio item not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Portfolio item updated successfully',
      data: portfolioItem
    });
  } catch (error) {
    console.error('Error updating portfolio item:', error);
    res.status(400).json({
      success: false,
      message: 'Failed to update portfolio item',
      error: error.message
    });
  }
};

// Delete portfolio item (admin)
exports.deletePortfolio = async (req, res) => {
  try {
    const portfolioItem = await Portfolio.findByIdAndDelete(req.params.id);
    
    if (!portfolioItem) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio item not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Portfolio item deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting portfolio item:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete portfolio item',
      error: error.message
    });
  }
};

