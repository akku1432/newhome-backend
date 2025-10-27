// Portfolio model schema for storing project images and details
const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    trim: true,
    enum: ['Kitchen', 'Living Room', 'Bedroom', 'Dining', 'Bathroom', 'Office', 'Other']
  },
  image: {
    type: String,
    required: [true, 'Image URL is required']
  },
  description: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  completionYear: {
    type: Number
  },
  projectCost: {
    type: String,
    trim: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create indexes for better query performance
portfolioSchema.index({ category: 1 });
portfolioSchema.index({ featured: -1, order: 1 });
portfolioSchema.index({ isActive: 1 });

module.exports = mongoose.model('Portfolio', portfolioSchema);

