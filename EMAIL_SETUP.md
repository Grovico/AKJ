# Email Setup Guide

## Gmail SMTP Configuration

This application uses Gmail SMTP to send inquiry notification emails. Follow these steps to configure:

### Step 1: Create Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** section
3. Enable **2-Step Verification** if not already enabled
4. Go to **App Passwords**: https://myaccount.google.com/apppasswords
5. Select **Mail** as the app and **Other (Custom name)** as device
6. Enter "Jeyam Traders Website" as the name
7. Click **Generate**
8. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

### Step 2: Create .env File

Create a `.env` file in the root directory with the following:

```env
EMAIL_USER=akjeyamtraders6@gmail.com
EMAIL_PASSWORD=your_16_character_app_password_here
```

**Important:** 
- Remove spaces from the app password
- Never commit the `.env` file to git (it's already in .gitignore)
- Keep your app password secure

### Step 3: Restart Server

After creating the `.env` file, restart your development server:

```bash
npm run dev
```

## Email Flow

When a customer submits an inquiry:

1. **Company Email** (akjeyamtraders6@gmail.com) receives:
   - Subject: "New Inquiry from [Company Name]"
   - Contains all inquiry details (company, contact person, phone, email, material type, quantity, message)
   - Includes timestamp

2. **Customer Email** (from form) receives:
   - Subject: "Thank You for Your Inquiry - Jeyam Traders"
   - Thank you message
   - Inquiry summary
   - Contact information
   - Business hours

## Troubleshooting

If emails are not sending:

1. Check that `.env` file exists and has correct values
2. Verify the App Password is correct (no spaces)
3. Check server console for error messages
4. Ensure 2-Step Verification is enabled on Gmail account
5. Check Gmail daily sending limit (500 emails/day for free accounts)

## Gmail Limits

- **Free Gmail accounts**: 500 emails per day
- If you exceed this limit, emails will fail until the next day
- For higher volume, consider using a dedicated email service (Resend, SendGrid, etc.)

