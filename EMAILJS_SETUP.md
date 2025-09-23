# EmailJS Setup Guide for Contact Form Notifications

## Overview
This setup will send email notifications to **hello@euphoricai.io** whenever someone submits the contact form on your website.

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended for Zoho Mail users)
4. For Zoho Mail configuration:
   - **Service ID**: Choose a name (e.g., `zoho_service`)
   - **User ID**: Your Zoho email (hello@euphoricai.io)
   - **Access Token**: Create an App Password in Zoho Mail settings
5. Test the connection and save

## Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Template ID: `contact_notification` (or any name)
4. Use this template content:

```html
Subject: 🔔 New Contact Form Submission - {{subject}}

<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #20B2AA, #4682B4); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #20B2AA; }
        .value { background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #20B2AA; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>🔔 New Contact Form Submission</h2>
            <p>You have a new inquiry from your website</p>
        </div>

        <div class="content">
            <div class="field">
                <div class="label">👤 Full Name:</div>
                <div class="value">{{from_name}}</div>
            </div>

            <div class="field">
                <div class="label">📧 Email Address:</div>
                <div class="value">{{from_email}}</div>
            </div>

            <div class="field">
                <div class="label">🏢 Company:</div>
                <div class="value">{{company}}</div>
            </div>

            <div class="field">
                <div class="label">📋 Subject:</div>
                <div class="value">{{subject}}</div>
            </div>

            <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value">{{message}}</div>
            </div>

            <div class="field">
                <div class="label">🕒 Submitted:</div>
                <div class="value">{{submission_date}}</div>
            </div>
        </div>

        <div class="footer">
            <p>Reply directly to <strong>{{from_email}}</strong> to respond to this inquiry</p>
            <p>Euphoric AI Contact Form System</p>
        </div>
    </div>
</body>
</html>
```

## Step 4: Configure Environment Variables
Update your `.env.local` file with the EmailJS credentials:

```env
# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=contact_notification
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Step 5: Get Your Credentials
1. **Service ID**: From your Email Service settings
2. **Template ID**: From your Email Template settings
3. **Public Key**: From Account → API Keys in EmailJS dashboard

## Step 6: Test the Setup
1. Update the environment variables
2. Restart your development server: `npm start`
3. Fill out the contact form on your website
4. Check hello@euphoricai.io for the notification email

## Important Notes
- The system still saves form submissions to your Supabase database
- EmailJS is an additional notification layer
- If EmailJS fails, the form submission still works
- Free tier includes 200 emails/month
- All customer details will be included in the notification email

## Troubleshooting
- Check browser console for EmailJS errors
- Verify all environment variables are set correctly
- Test EmailJS service connection in their dashboard
- Ensure Zoho Mail allows app passwords for SMTP

## Security
- EmailJS public key is safe to expose in frontend
- No sensitive credentials are stored in the client code
- All emails are sent through EmailJS secure infrastructure