// Email Service for NUHome Interiors Contact Form
const nodemailer = require('nodemailer');

// Create email transporter
const createTransporter = () => {
  const config = {
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  };

  console.log('📧 Email Configuration:', {
    service: 'gmail',
    user: process.env.EMAIL_USER,
    passwordConfigured: !!process.env.EMAIL_PASSWORD
  });

  return nodemailer.createTransport(config);
};

// Send contact form emails
exports.sendContactEmail = async ({ name, email, phone, message }) => {
  try {
    console.log('📤 Sending emails...');
    const transporter = createTransporter();

    // Email to business
    const businessEmail = {
      from: `NUHome Interiors <${process.env.EMAIL_USER}>`,
      to: 'nuhomeinteriorleads@gmail.com',
      subject: `New Contact Form - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #030F30; color: white; padding: 20px; text-align: center;">
            <h1>NUHome Interiors</h1>
            <p>New Contact Form Submission</p>
          </div>
          <div style="background: white; padding: 30px; border: 1px solid #ddd;">
            <h2 style="color: #030F30;">Contact Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3 style="color: #030F30;">Message:</h3>
            <p style="background: #f5f5f5; padding: 15px; border-left: 4px solid #FD8802;">
              ${message}
            </p>
          </div>
        </div>
      `
    };

    // Email to customer
    const customerEmail = {
      from: `NUHome Interiors <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting NUHome Interiors',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #030F30; color: white; padding: 20px; text-align: center;">
            <h1>NUHome Interiors</h1>
            <p>Transforming Spaces into Dream Homes</p>
          </div>
          <div style="background: white; padding: 30px; border: 1px solid #ddd;">
            <h2 style="color: #030F30;">Hello ${name},</h2>
            <p>Thank you for reaching out to NUHome Interiors!</p>
            <p>We have received your message and our team will get back to you within 24 hours.</p>
            <div style="background: #f5f5f5; padding: 15px; margin: 20px 0;">
              <h3 style="color: #030F30;">Your Message:</h3>
              <p>${message}</p>
            </div>
            <p>Best regards,<br><strong>The NUHome Interiors Team</strong></p>
          </div>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(businessEmail);
    console.log('✅ Business email sent to: nuhomeinteriorleads@gmail.com');
    
    await transporter.sendMail(customerEmail);
    console.log('✅ Customer email sent to:', email);

    return { success: true };
  } catch (error) {
    console.error('❌ Email Error:', error.message);
    throw error;
  }
};
