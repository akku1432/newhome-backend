// Email service using Nodemailer
const nodemailer = require('nodemailer');

// Create reusable transporter with enhanced Gmail settings
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: false, // true for 465, false for 587
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false, // Accept self-signed certificates
      ciphers: 'SSLv3'
    },
    connectionTimeout: 90000, // 10 seconds
    greetingTimeout: 90000,
    socketTimeout: 90000
  });
};

// Send contact form notification email
exports.sendContactEmail = async ({ name, email, phone, message }) => {
  try {
    const transporter = createTransporter();

    // Email to business owner (nuhomeinteriorleads@gmail.com)
    const mailOptions = {
      from: process.env.EMAIL_FROM, // FROM: nuhomeinteriors9@gmail.com
      to: 'nuhomeinteriorleads@gmail.com',  // TO: nuhomeinteriorleads@gmail.com
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
          <div style="background-color: #030F30; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">NUHome Interiors</h1>
            <p style="margin: 5px 0;">New Contact Form Submission</p>
          </div>
          
          <div style="background-color: white; padding: 30px; margin-top: 20px; border-radius: 5px;">
            <h2 style="color: #030F30; border-bottom: 2px solid #FD8802; padding-bottom: 10px;">Contact Details</h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #030F30;">Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong style="color: #030F30;">Email:</strong> <a href="mailto:${email}" style="color: #FD8802;">${email}</a></p>
              <p style="margin: 10px 0;"><strong style="color: #030F30;">Phone:</strong> <a href="tel:${phone}" style="color: #FD8802;">${phone}</a></p>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #030F30; margin-bottom: 10px;">Message:</h3>
              <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #FD8802; line-height: 1.6;">
                ${message}
              </p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
              <p style="color: #666; font-size: 12px; margin: 0;">
                This email was sent from the NUHome Interiors contact form.
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>&copy; ${new Date().getFullYear()} NUHome Interiors. All rights reserved.</p>
          </div>
        </div>
      `
    };

    // Send confirmation email to user
    const confirmationMailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Thank you for contacting NUHome Interiors',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
          <div style="background-color: #030F30; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">NUHome Interiors</h1>
            <p style="margin: 5px 0;">Transforming Spaces into Dream Homes</p>
          </div>
          
          <div style="background-color: white; padding: 30px; margin-top: 20px; border-radius: 5px;">
            <h2 style="color: #030F30;">Hello ${name},</h2>
            
            <p style="line-height: 1.6; color: #333;">
              Thank you for reaching out to NUHome Interiors! We have received your message and our team will get back to you within 24 hours.
            </p>
            
            <p style="line-height: 1.6; color: #333;">
              We're excited to help you transform your space into your dream home.
            </p>
            
            <div style="background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-left: 4px solid #FD8802;">
              <h3 style="color: #030F30; margin-top: 0;">Your Message:</h3>
              <p style="color: #666; line-height: 1.6;">${message}</p>
            </div>
            
            <p style="line-height: 1.6; color: #333;">
              If you have any urgent queries, feel free to call us directly.
            </p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
              <p style="color: #666; font-size: 14px; margin: 5px 0;">Best regards,</p>
              <p style="color: #030F30; font-weight: bold; margin: 5px 0;">The NUHome Interiors Team</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>&copy; ${new Date().getFullYear()} NUHome Interiors. All rights reserved.</p>
          </div>
        </div>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(confirmationMailOptions)
    ]);

    console.log('✅ Emails sent successfully');
    console.log(`📧 Business notification sent to: nuhomeinteriorleads@gmail.com`);
    console.log(`📧 Customer confirmation sent to: ${email}`);
    
    return true;
  } catch (error) {
    console.error('❌ Email sending error:', error);
    throw error;
  }
};

