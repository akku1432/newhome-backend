// Script to seed portfolio data into MongoDB
require('dotenv').config();
const mongoose = require('mongoose');
const Portfolio = require('../models/Portfolio');

// Portfolio data from frontend
const portfolioData = [
  {
    title: 'Modern Kitchen Design',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=600',
    description: 'Contemporary modular kitchen with sleek design and smart storage solutions',
    order: 1,
    featured: true
  },
  {
    title: 'Luxury Living Room',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600',
    description: 'Elegant living room with modern furniture and sophisticated aesthetics',
    order: 2,
    featured: true
  },
  {
    title: 'Contemporary Bedroom',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600',
    description: 'Peaceful bedroom interior with custom wardrobes and ambient lighting',
    order: 3,
    featured: false
  },
  {
    title: 'Elegant Dining Space',
    category: 'Dining',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600',
    description: 'Sophisticated dining area with modern furniture and perfect lighting',
    order: 4,
    featured: false
  },
  {
    title: 'Minimalist Kitchen',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600',
    description: 'Clean and functional kitchen design with minimalist approach',
    order: 5,
    featured: false
  },
  {
    title: 'Cozy Bedroom Interior',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600',
    description: 'Warm and inviting bedroom with custom storage solutions',
    order: 6,
    featured: false
  },
  {
    title: 'Modern Living Space',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600',
    description: 'Contemporary living room with open layout and natural lighting',
    order: 7,
    featured: false
  },
  {
    title: 'Designer Kitchen',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600',
    description: 'Premium kitchen design with high-end appliances and finishes',
    order: 8,
    featured: true
  }
];

// Connect to MongoDB and seed data
const seedPortfolio = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing portfolio data (optional - comment out if you want to keep existing data)
    await Portfolio.deleteMany({});
    console.log('🗑️  Cleared existing portfolio data');

    // Insert new portfolio data
    const result = await Portfolio.insertMany(portfolioData);
    console.log(`✅ Successfully seeded ${result.length} portfolio items`);

    // Display seeded data
    console.log('\n📊 Seeded Portfolio Items:');
    result.forEach((item, index) => {
      console.log(`${index + 1}. ${item.title} (${item.category})`);
    });

    console.log('\n🎉 Portfolio seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding portfolio:', error);
    process.exit(1);
  }
};

// Run the seed function
seedPortfolio();

