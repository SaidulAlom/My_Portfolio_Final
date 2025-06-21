# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to make your contact form fully functional and send real emails.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps for your email provider
5. Give your service a name (e.g., "Gmail")
6. Note down the **Service ID** (it will look like `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Choose a template or start from scratch
4. Design your email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Sender's message
   - `{{to_name}}` - Your name (Saidul Alom)

Example template:
```
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

Best regards,
Your Portfolio Website
```

5. Save the template and note down the **Template ID** (it will look like `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **API Keys** in your dashboard
2. Copy your **Public Key** (it will look like `public_key_xxxxxxx`)

## Step 5: Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here',
  TEMPLATE_ID: 'your_template_id_here', 
  PUBLIC_KEY: 'your_public_key_here',
};
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Go to the contact section of your portfolio
3. Fill out the form and submit
4. Check your email to see if you received the message

## Troubleshooting

### Common Issues:

1. **"Failed to send message" error**
   - Check if all EmailJS credentials are correct
   - Verify your email service is properly connected
   - Check browser console for detailed error messages

2. **CORS errors**
   - Make sure you're using the correct EmailJS package (`@emailjs/browser`)
   - Ensure EmailJS is properly initialized in App.tsx

3. **Template variables not working**
   - Make sure variable names in your template match exactly: `{{from_name}}`, `{{from_email}}`, `{{message}}`
   - Check that the template is saved and published

### EmailJS Limits (Free Plan):
- 200 emails per month
- 2 email templates
- 1 email service

## Security Notes

- The public key is safe to use in frontend code
- EmailJS handles the email sending securely
- No backend server required
- Your email credentials are stored securely on EmailJS servers

## Alternative Setup Options

If you prefer not to use EmailJS, you can also:

1. **Use Netlify Forms** (if deploying to Netlify)
2. **Use Formspree** (similar to EmailJS)
3. **Create a backend API** (Node.js/Express with Nodemailer)
4. **Use Firebase Functions** with Nodemailer

The EmailJS solution is recommended for its simplicity and ease of setup. 