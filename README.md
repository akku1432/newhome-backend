# NUhome Interiors - Backend API

Backend server for NUhome Interiors website built with Node.js, Express, and MongoDB.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed locally OR MongoDB Atlas account
- Gmail account (for email notifications)

### Installation Steps

1. **Navigate to backend folder:**
   ```bash
   cd nuhome-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file:**
   Create a file named `.env` in the `nuhome-backend` folder and add the following:
   ```env
   # Server Configuration
   PORT=5000

   # MongoDB Connection
   MONGODB_URI=mongodb://localhost:27017/nuhome_interiors

   # Email Configuration (using Gmail)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-specific-password
   EMAIL_FROM=NUhome Interiors <your-email@gmail.com>
   NOTIFICATION_EMAIL=your-business-email@gmail.com

   # Frontend URL
   FRONTEND_URL=http://localhost:3000
   ```

4. **Set up Gmail App Password:**
   - Go to your Google Account settings
   - Enable 2-Step Verification
   - Go to Security → App passwords
   - Generate a new app password for "Mail"
   - Use this password in your `.env` file as `EMAIL_PASSWORD`

5. **Start MongoDB:**
   
   **Option A - Local MongoDB:**
   ```bash
   # Windows
   net start MongoDB
   
   # Mac/Linux
   sudo systemctl start mongod
   ```
   
   **Option B - MongoDB Atlas (Cloud):**
   - Create free account at https://www.mongodb.com/cloud/atlas
   - Create a cluster
   - Get connection string and replace `MONGODB_URI` in `.env`

6. **Run the server:**
   ```bash
   # Development mode (auto-restart on changes)
   npm run dev
   
   # Production mode
   npm start
   ```

7. **Verify server is running:**
   Open browser and go to: http://localhost:5000
   You should see: `{"message":"NUhome Interiors API is running","status":"active"}`

8. **Seed Portfolio Data (Optional but Recommended):**
   ```bash
   node scripts/seedPortfolio.js
   ```
   This will populate your database with sample portfolio images. See `MIGRATION_GUIDE.md` for details.

## 📡 API Endpoints

### Contact Form
- **POST** `/api/contact` - Submit contact form
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "message": "I need interior design consultation"
  }
  ```

- **GET** `/api/contact` - Get all contact submissions (admin)

### Testimonials
- **GET** `/api/testimonials` - Get all active testimonials
- **POST** `/api/testimonials` - Create new testimonial (admin)

### Portfolio
- **GET** `/api/portfolio` - Get all portfolio items
- **GET** `/api/portfolio?category=Kitchen` - Filter by category
- **GET** `/api/portfolio?featured=true` - Get featured items
- **GET** `/api/portfolio/:id` - Get single portfolio item
- **POST** `/api/portfolio` - Create new portfolio item (admin)
- **PUT** `/api/portfolio/:id` - Update portfolio item (admin)
- **DELETE** `/api/portfolio/:id` - Delete portfolio item (admin)

## 📊 Database Migration

To populate your MongoDB with portfolio image data:

```bash
node scripts/seedPortfolio.js
```

This will seed 8 portfolio items with images. See `MIGRATION_GUIDE.md` for detailed instructions.

## 📁 Project Structure

```
nuhome-backend/
├── controllers/          # Request handlers
│   ├── contactController.js
│   ├── testimonialController.js
│   └── portfolioController.js
├── models/              # Database schemas
│   ├── Contact.js
│   ├── Testimonial.js
│   └── Portfolio.js
├── routes/              # API routes
│   ├── contactRoutes.js
│   ├── testimonialRoutes.js
│   └── portfolioRoutes.js
├── scripts/             # Database utilities
│   └── seedPortfolio.js
├── utils/               # Helper functions
│   └── emailService.js
├── .env                 # Environment variables (create this)
├── .gitignore
├── MIGRATION_GUIDE.md   # Database seeding guide
├── package.json
├── server.js            # Main server file
└── README.md
```

## 🔧 Troubleshooting

### MongoDB Connection Issues
- Make sure MongoDB is running
- Check if connection string is correct
- For MongoDB Atlas, whitelist your IP address

### Email Not Sending
- Verify Gmail credentials
- Make sure you're using App Password, not regular password
- Check if 2-Step Verification is enabled
- Verify EMAIL_HOST and EMAIL_PORT are correct

### Port Already in Use
- Change PORT in `.env` to different number (e.g., 5001)
- Or kill the process using port 5000

## 📝 Notes for Beginners

- The server must be running for the frontend to work properly
- Keep the terminal window open while developing
- Any changes to `.env` require server restart
- Use `Ctrl + C` to stop the server

## 🔐 Security Notes

- Never commit `.env` file to git
- In production, use environment variables instead of `.env`
- Add authentication middleware for admin routes
- Use HTTPS in production

