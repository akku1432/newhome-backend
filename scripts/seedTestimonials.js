// Script to seed client testimonials
require('dotenv').config();
const mongoose = require('mongoose');
const Testimonial = require('../models/Testimonial');

// Testimonial data with only Bangalore and Hyderabad locations
const testimonialsData = [
  {
    name: 'Rajesh Kumar',
    image: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    review: 'NUhome Interiors did an amazing job on our modular kitchen. The quality of work is exceptional and they completed everything on time. Highly recommended!',
    location: 'Bangalore, Karnataka',
    projectType: 'Modular Kitchen',
    isActive: true
  },
  {
    name: 'Priya Sharma',
    image: 'https://i.pravatar.cc/150?img=47',
    rating: 5,
    review: 'We got our entire 3BHK apartment designed by NUhome. Their attention to detail and professional approach is commendable. Very happy with the results!',
    location: 'Hyderabad, Telangana',
    projectType: 'Complete Home Interior',
    isActive: true
  },
  {
    name: 'Arjun Reddy',
    image: 'https://i.pravatar.cc/150?img=33',
    rating: 5,
    review: 'Excellent work on our bedroom and wardrobe design. The team is very professional and the quality of materials used is top-notch. Worth every penny!',
    location: 'Bangalore, Karnataka',
    projectType: 'Bedroom & Wardrobe',
    isActive: true
  },
  {
    name: 'Sneha Patel',
    image: 'https://i.pravatar.cc/150?img=38',
    rating: 5,
    review: 'NUhome transformed our living room completely! The false ceiling and TV unit design exceeded our expectations. Great team and wonderful execution!',
    location: 'Hyderabad, Telangana',
    projectType: 'Living Room Interior',
    isActive: true
  },
  {
    name: 'Vikram Singh',
    image: 'https://i.pravatar.cc/150?img=51',
    rating: 5,
    review: 'Outstanding kitchen design with excellent storage solutions. The team understood our requirements perfectly and delivered beyond expectations!',
    location: 'Bangalore, Karnataka',
    projectType: 'Modular Kitchen',
    isActive: true
  },
  {
    name: 'Lakshmi Menon',
    image: 'https://i.pravatar.cc/150?img=45',
    rating: 5,
    review: 'Very satisfied with the complete home interior work. Professional team, quality materials, and timely completion. Highly recommend NUhome Interiors!',
    location: 'Hyderabad, Telangana',
    projectType: 'Complete Home Interior',
    isActive: true
  },
  {
    name: 'Karthik Rao',
    image: 'https://i.pravatar.cc/150?img=15',
    rating: 5,
    review: 'Fantastic experience with NUhome! Our bedroom interior and custom wardrobe turned out beautiful. Great craftsmanship and attention to detail.',
    location: 'Bangalore, Karnataka',
    projectType: 'Bedroom Interior',
    isActive: true
  },
  {
    name: 'Anitha Reddy',
    image: 'https://i.pravatar.cc/150?img=44',
    rating: 5,
    review: 'The pooja room and dining area designed by NUhome is exactly what we wanted. Professional service and excellent quality work. Very impressed!',
    location: 'Hyderabad, Telangana',
    projectType: 'Pooja Room & Dining',
    isActive: true
  }
];

// Connect to MongoDB and seed data
const seedTestimonials = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing testimonials
    await Testimonial.deleteMany({});
    console.log('🗑️  Cleared existing testimonials');

    // Insert new testimonials
    const result = await Testimonial.insertMany(testimonialsData);
    console.log(`✅ Successfully seeded ${result.length} testimonials`);

    // Display seeded testimonials
    console.log('\n📊 Seeded Client Testimonials:\n');
    
    result.forEach((testimonial, index) => {
      console.log(`${index + 1}. ${testimonial.name} - ${testimonial.location}`);
      console.log(`   ${testimonial.projectType} | Rating: ${'⭐'.repeat(testimonial.rating)}`);
    });

    // Show location distribution
    const bangaloreCount = result.filter(t => t.location.includes('Bangalore')).length;
    const hyderabadCount = result.filter(t => t.location.includes('Hyderabad')).length;
    
    console.log('\n📍 Location Distribution:');
    console.log(`   Bangalore: ${bangaloreCount} testimonials`);
    console.log(`   Hyderabad: ${hyderabadCount} testimonials`);

    console.log('\n🎉 Testimonials seeding completed successfully!');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding testimonials:', error);
    process.exit(1);
  }
};

// Run the seed function
seedTestimonials();

