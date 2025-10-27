# Database Migration Guide - NUhome Interiors

This guide will help you populate your MongoDB database with the portfolio image data.

## Prerequisites

Before running the migration:
1. Make sure MongoDB is running (locally or Atlas)
2. Ensure your `.env` file is properly configured with `MONGODB_URI`
3. Backend dependencies are installed (`npm install`)

## Running the Portfolio Migration

### Step 1: Navigate to Backend Directory

```bash
cd nuhome-backend
```

### Step 2: Run the Seed Script

```bash
node scripts/seedPortfolio.js
```

### Expected Output

You should see output similar to:

```
✅ Connected to MongoDB
🗑️  Cleared existing portfolio data
✅ Successfully seeded 8 portfolio items

📊 Seeded Portfolio Items:
1. Modern Kitchen Design (Kitchen)
2. Luxury Living Room (Living Room)
3. Contemporary Bedroom (Bedroom)
4. Elegant Dining Space (Dining)
5. Minimalist Kitchen (Kitchen)
6. Cozy Bedroom Interior (Bedroom)
7. Modern Living Space (Living Room)
8. Designer Kitchen (Kitchen)

🎉 Portfolio seeding completed successfully!
```

## What Gets Seeded

The script populates your database with 8 portfolio items including:
- **Title**: Project name
- **Category**: Kitchen, Living Room, Bedroom, or Dining
- **Image**: High-quality Unsplash images
- **Description**: Brief project description
- **Order**: Display order on website
- **Featured**: Whether to highlight the project

## Customizing Portfolio Data

To add your own portfolio items, edit `scripts/seedPortfolio.js`:

```javascript
const portfolioData = [
  {
    title: 'Your Project Title',
    category: 'Kitchen', // Options: Kitchen, Living Room, Bedroom, Dining, Bathroom, Office, Other
    image: 'https://your-image-url.com/image.jpg',
    description: 'Project description',
    location: 'Mumbai, India', // Optional
    completionYear: 2024, // Optional
    projectCost: '₹15-20 Lakhs', // Optional
    order: 1,
    featured: true
  },
  // Add more items...
];
```

## API Endpoints

After seeding, these portfolio endpoints will be available:

### Public Endpoints
- `GET /api/portfolio` - Get all portfolio items
- `GET /api/portfolio?category=Kitchen` - Filter by category
- `GET /api/portfolio?featured=true` - Get featured items only
- `GET /api/portfolio/:id` - Get single portfolio item

### Admin Endpoints
- `POST /api/portfolio` - Create new portfolio item
- `PUT /api/portfolio/:id` - Update portfolio item
- `DELETE /api/portfolio/:id` - Delete portfolio item

## Testing the API

After seeding, test with:

```bash
# Get all portfolio items
curl http://localhost:5000/api/portfolio

# Get kitchen projects only
curl http://localhost:5000/api/portfolio?category=Kitchen

# Get featured projects
curl http://localhost:5000/api/portfolio?featured=true
```

## Frontend Integration

The frontend (`Portfolio.jsx`) automatically fetches data from the API:
- Displays portfolio items from MongoDB
- Falls back to static data if API fails
- Shows loading state while fetching
- Supports lightbox view for images

## Re-running the Seed Script

⚠️ **Warning**: The seed script **clears existing portfolio data** before inserting new data.

If you want to keep existing data:
1. Comment out this line in `scripts/seedPortfolio.js`:
   ```javascript
   // await Portfolio.deleteMany({});
   ```

## Adding Images to MongoDB

### Option 1: Using Unsplash (Free, No Upload)
Use Unsplash URLs as shown in the seed script. This is the easiest option.

### Option 2: Upload to Cloud Storage
1. Upload images to Cloudinary, AWS S3, or similar
2. Get the public URLs
3. Add them to your seed data or via API

### Option 3: Use Your Own Server
1. Set up file upload in your backend
2. Serve images from `/public/uploads/`
3. Update portfolio items with local paths

## Troubleshooting

### Error: MongoDB Connection Failed
- Check if MongoDB is running
- Verify `MONGODB_URI` in `.env` file
- Ensure network access (for Atlas)

### Error: Module Not Found
```bash
npm install
```

### Error: Portfolio Model Not Found
Make sure you're in the `nuhome-backend` directory when running the script.

### Want to Reset Portfolio Data?
Just run the seed script again - it will clear and re-populate.

## Next Steps

After seeding:
1. ✅ Start your backend: `npm run dev`
2. ✅ Start your frontend: `cd ../nuhome-frontend && npm start`
3. ✅ Visit http://localhost:3000 and check the Portfolio section
4. ✅ Verify images are loading from MongoDB

## Adding Your Own Images

To add your own project images:

1. **Create New Portfolio Item via API**:
```bash
curl -X POST http://localhost:5000/api/portfolio \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Amazing Kitchen",
    "category": "Kitchen",
    "image": "https://your-image-url.com/image.jpg",
    "description": "Beautiful modern kitchen design",
    "location": "Delhi, India",
    "featured": true
  }'
```

2. **Or Edit the Seed Script** and add your projects to `portfolioData` array

3. **Or Use MongoDB Compass/Atlas** to manually add documents

## Database Schema

Portfolio collection structure:
```javascript
{
  _id: ObjectId,
  title: String (required),
  category: String (required),
  image: String (required - URL),
  description: String (optional),
  location: String (optional),
  completionYear: Number (optional),
  projectCost: String (optional),
  featured: Boolean (default: false),
  isActive: Boolean (default: true),
  order: Number (default: 0),
  createdAt: Date (auto-generated)
}
```

---

**Need Help?** Check the main README.md for more troubleshooting tips.

