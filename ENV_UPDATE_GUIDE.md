# 📧 Environment Configuration Update Guide

## ✅ Updated Contact Details

Your NUhome Interiors contact information has been updated:

### New Contact Details:
- 📧 **Email:** nuhomeinteriors9@gmail.com
- 📱 **Phone/WhatsApp:** +91 6300724553
- 📍 **Locations:** Hyderabad | Vizag | Bangalore

## 🔧 Update Your .env File

You need to update your `.env` file in the `nuhome-backend` folder with these new settings:

### Step 1: Open Your .env File

Navigate to: `F:\New home\nuhome-backend\.env`

### Step 2: Update These Variables

```env
# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=nuhomeinteriors9@gmail.com
EMAIL_PASSWORD=your-app-specific-password-here
EMAIL_FROM=NUhome Interiors <nuhomeinteriors9@gmail.com>
NOTIFICATION_EMAIL=nuhomeinteriors9@gmail.com

# WhatsApp Configuration
WHATSAPP_PHONE=916300724553

# Frontend URL (keep as is)
FRONTEND_URL=http://localhost:3000

# MongoDB URI (keep as is)
MONGODB_URI=mongodb://localhost:27017/nuhome_interiors
PORT=5000
```

## 📧 Setting Up Gmail App Password

Since you're using **nuhomeinteriors9@gmail.com**, you need to generate an App Password:

### Steps:

1. **Go to Google Account:**
   - Visit: https://myaccount.google.com/
   - Log in with nuhomeinteriors9@gmail.com

2. **Enable 2-Step Verification:**
   - Click "Security" in left sidebar
   - Find "2-Step Verification"
   - Click and follow steps to enable

3. **Generate App Password:**
   - Go back to Security page
   - Search for "App passwords"
   - Select app: **Mail**
   - Select device: **Other** (enter "NUhome Website")
   - Click **Generate**
   - Copy the 16-character password (format: xxxx xxxx xxxx xxxx)

4. **Update .env File:**
   - Paste the app password in `EMAIL_PASSWORD` field
   - Remove spaces, use just the 16 characters

**Example:**
```env
EMAIL_PASSWORD=abcdefghijklmnop
```

## 📱 WhatsApp Integration

### Current Setup:
The contact form will:
1. ✅ Send email to **nuhomeinteriors9@gmail.com**
2. ✅ Send confirmation email to the customer
3. 📱 Log WhatsApp notification details (ready for integration)

### WhatsApp Notification Contains:
- Customer name
- Customer email
- Customer phone
- Customer message
- Timestamp

### To Enable Actual WhatsApp Sending:

You can integrate with these services (requires additional setup):

#### Option 1: Twilio WhatsApp API (Recommended)
```bash
npm install twilio
```

**Cost:** $0.005 per message  
**Setup:** https://www.twilio.com/whatsapp

#### Option 2: WhatsApp Business API
**Free but requires business verification**  
**Setup:** https://business.whatsapp.com/

#### Option 3: CallMeBot (Free, Simple)
**Free for personal use**  
**Setup:** https://www.callmebot.com/blog/free-api-whatsapp-messages/

## ✅ What's Already Done

### Frontend Updates:
- ✅ Footer: Updated email, phone, and addresses
- ✅ Contact section: Updated contact information
- ✅ All references to old contact info updated

### Backend Updates:
- ✅ Email service prepared for WhatsApp
- ✅ Email templates use new branding
- ✅ WhatsApp notification structure ready

## 🚀 Quick Start

### 1. Update .env File
```bash
# Edit this file:
F:\New home\nuhome-backend\.env

# Add/Update:
EMAIL_USER=nuhomeinteriors9@gmail.com
EMAIL_PASSWORD=your-app-password-here
EMAIL_FROM=NUhome Interiors <nuhomeinteriors9@gmail.com>
NOTIFICATION_EMAIL=nuhomeinteriors9@gmail.com
WHATSAPP_PHONE=916300724553
```

### 2. Restart Backend Server
```bash
cd "F:\New home\nuhome-backend"
npm run dev
```

### 3. Test the Form
1. Visit: http://localhost:3000
2. Scroll to Contact section
3. Fill and submit form
4. Check **nuhomeinteriors9@gmail.com** for emails

## 📊 What Happens When Form is Submitted

```
User Fills Form
    ↓
Submits Form
    ↓
Backend Receives Data
    ↓
┌─────────────────────┬─────────────────────┐
│                     │                     │
Email to Business     Email to Customer     WhatsApp Log
(nuhomeinteriors9)    (Confirmation)        (Console)
│                     │                     │
└─────────────────────┴─────────────────────┘
    ↓
Success Message to User
```

## 📝 Email Templates Updated

### Business Notification Email:
- ✅ Sent to: nuhomeinteriors9@gmail.com
- ✅ Subject: "New Contact Form Submission from [Name]"
- ✅ Contains: Name, Email, Phone, Message

### Customer Confirmation Email:
- ✅ Sent to: Customer's email
- ✅ Subject: "Thank you for contacting NUhome Interiors"
- ✅ Contains: Confirmation message, their message copy

## 🔐 Security Notes

- ⚠️ Never commit `.env` file to git
- ⚠️ Use App Password, not regular Gmail password
- ⚠️ Keep WHATSAPP_PHONE private
- ✅ Enable 2-Step Verification on Gmail

## 🐛 Troubleshooting

### Emails Not Sending?
1. Check if App Password is correct
2. Verify 2-Step Verification is enabled
3. Check EMAIL_USER matches nuhomeinteriors9@gmail.com
4. Restart backend server after .env changes

### Form Submission Fails?
1. Check browser console for errors
2. Verify backend is running
3. Check MongoDB connection
4. Look at backend terminal for error messages

## 📞 Updated Contact Display

### Where Contact Info Appears:
1. **Footer** (bottom of every page)
   - Phone: +91 6300724553
   - Email: nuhomeinteriors9@gmail.com
   - Locations: Hyderabad | Vizag | Bangalore

2. **Contact Section**
   - Phone: +91 6300724553
   - Email: nuhomeinteriors9@gmail.com
   - Locations: Hyderabad | Vizag | Bangalore

3. **Email Templates**
   - From: NUhome Interiors <nuhomeinteriors9@gmail.com>
   - Reply-To: nuhomeinteriors9@gmail.com

## ✨ Summary

✅ **Email:** nuhomeinteriors9@gmail.com  
✅ **Phone:** +91 6300724553  
✅ **WhatsApp:** +91 6300724553  
✅ **Locations:** Hyderabad, Vizag, Bangalore  
✅ **Form Integration:** Email + WhatsApp ready  

## 🎯 Next Steps

1. ✅ Update `.env` file with new email
2. ✅ Generate Gmail App Password
3. ✅ Restart backend server
4. ✅ Test contact form
5. ⏭️ (Optional) Set up actual WhatsApp API

---

**Need help?** Check the main README.md or contact support.

