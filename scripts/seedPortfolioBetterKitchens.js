// Script to seed portfolio with better kitchen images
require('dotenv').config();
const mongoose = require('mongoose');
const Portfolio = require('../models/Portfolio');

// Portfolio data with better, more efficient kitchen images
const portfolioData = [
  // Kitchen Category - Better, more realistic modular kitchen designs
  {
    title: 'Premium Modular Kitchen',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=85',
    description: 'Luxury modular kitchen with island, quartz countertops, and premium appliances',
    order: 1,
    featured: true
  },
  {
    title: 'Elegant L-Shaped Kitchen',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85',
    description: 'Space-efficient L-shaped modular kitchen with smart storage solutions',
    order: 2,
    featured: false
  },
  {
    title: 'Designer Modular Kitchen',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&q=85',
    description: 'High-end kitchen with integrated appliances and Italian marble',
    order: 3,
    featured: true
  },
  {
    title: 'Contemporary Kitchen Design',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1200&q=85',
    description: 'Minimalist kitchen with handleless cabinets and modern fittings',
    order: 4,
    featured: false
  },

  // Living Room Category
  {
    title: 'Luxury Living Room',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85',
    description: 'Elegant living space with designer furniture and ambient lighting',
    order: 1,
    featured: true
  },
  {
    title: 'Modern Living Space',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85',
    description: 'Contemporary living room with open concept and natural light',
    order: 2,
    featured: false
  },
  {
    title: 'Contemporary Lounge',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=85',
    description: 'Stylish living room with false ceiling and premium finishes',
    order: 3,
    featured: false
  },

  // Bedroom Category
  {
    title: 'Master Bedroom Suite',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=85',
    description: 'Luxurious master bedroom with walk-in wardrobe and ensuite bathroom',
    order: 1,
    featured: true
  },
  {
    title: 'Cozy Bedroom Interior',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=85',
    description: 'Warm and comfortable bedroom with custom furniture and soft lighting',
    order: 2,
    featured: false
  },
  {
    title: 'Modern Bedroom Design',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=85',
    description: 'Contemporary bedroom with minimalist design and smart storage',
    order: 3,
    featured: false
  },

  // Dining Category
  {
    title: 'Elegant Dining Space',
    category: 'Dining',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200&q=85',
    description: 'Sophisticated dining area with designer furniture and perfect lighting',
    order: 1,
    featured: false
  },
];

// Connect to MongoDB and seed data
const seedPortfolio = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing portfolio data
    await Portfolio.deleteMany({});
    console.log('🗑️  Cleared existing portfolio data');

    // Insert new portfolio data
    const result = await Portfolio.insertMany(portfolioData);
    console.log(`✅ Successfully seeded ${result.length} portfolio items`);

    // Display seeded data by category
    console.log('\n📊 Seeded Portfolio Items by Category:\n');
    
    const categories = [...new Set(portfolioData.map(item => item.category))];
    categories.forEach(category => {
      const items = portfolioData.filter(item => item.category === category);
      console.log(`\n🏠 ${category} (${items.length} items):`);
      items.forEach((item, index) => {
        const featured = item.featured ? '⭐' : '  ';
        console.log(`   ${featured} ${index + 1}. ${item.title}`);
      });
    });

    console.log('\n\n🎉 Portfolio seeding completed successfully!');
    console.log('✨ Removed: Modern White Kitchen & Modern Dining Room');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding portfolio:', error);
    process.exit(1);
  }
};

// Run the seed function
seedPortfolio();
