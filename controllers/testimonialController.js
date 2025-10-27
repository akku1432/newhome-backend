// Controller for handling testimonials
const Testimonial = require('../models/Testimonial');

// @desc    Get all active testimonials
// @route   GET /api/testimonials
// @access  Public
exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ isActive: true })
      .sort({ createdAt: -1 })
      .select('-__v');

    // If no testimonials in database, return sample data
    if (testimonials.length === 0) {
      const sampleTestimonials = [
        {
          name: "Rajesh Sharma",
          image: "https://ui-avatars.com/api/?name=Rajesh+Sharma&background=FD8802&color=fff&size=150",
          rating: 5,
          review: "Newhome Interiors transformed our house into a beautiful home. Their attention to detail and professionalism is commendable. The modular kitchen they designed is both functional and stunning!",
          location: "Mumbai, Maharashtra",
          projectType: "Full Home Interior"
        },
        {
          name: "Priya Patel",
          image: "https://ui-avatars.com/api/?name=Priya+Patel&background=030F30&color=fff&size=150",
          rating: 5,
          review: "We are extremely happy with our bedroom and living room interiors. The team understood our requirements perfectly and delivered beyond expectations. Highly recommended!",
          location: "Bangalore, Karnataka",
          projectType: "Bedroom & Living Room"
        },
        {
          name: "Amit Verma",
          image: "https://ui-avatars.com/api/?name=Amit+Verma&background=FD8802&color=fff&size=150",
          rating: 5,
          review: "The false ceiling and lighting design they created for our home is simply amazing. Great quality work at reasonable prices. The entire process was smooth and hassle-free.",
          location: "Delhi NCR",
          projectType: "False Ceiling & Lighting"
        },
        {
          name: "Sneha Reddy",
          image: "https://ui-avatars.com/api/?name=Sneha+Reddy&background=030F30&color=fff&size=150",
          rating: 5,
          review: "Excellent service from consultation to execution. Their design team is creative and the execution team is professional. Our modular kitchen is the highlight of our home now!",
          location: "Hyderabad, Telangana",
          projectType: "Modular Kitchen"
        }
      ];

      return res.status(200).json({
        success: true,
        count: sampleTestimonials.length,
        data: sampleTestimonials,
        isSampleData: true
      });
    }

    res.status(200).json({
      success: true,
      count: testimonials.length,
      data: testimonials,
      isSampleData: false
    });
  } catch (error) {
    console.error('Get testimonials error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve testimonials'
    });
  }
};

// @desc    Create a new testimonial (admin use)
// @route   POST /api/testimonials
// @access  Private (in production, add authentication)
exports.createTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Testimonial created successfully',
      data: testimonial
    });
  } catch (error) {
    console.error('Create testimonial error:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }

    res.status(500).json({
      success: false,
      message: 'Failed to create testimonial'
    });
  }
};

