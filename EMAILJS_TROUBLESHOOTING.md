# EmailJS Troubleshooting Guide

## Current Error: "Failed to send message. Please try again later."

This error usually occurs due to one of these issues:

## 🔍 **Step 1: Check Browser Console**

1. Open your browser's Developer Tools (F12)
2. Go to the Console tab
3. Try submitting the contact form
4. Look for error messages and share them with me

## 🔍 **Step 2: Verify EmailJS Template Variables**

Your EmailJS template must use these exact variable names:

```
{{from_name}}    - Sender's name
{{from_email}}   - Sender's email  
{{message}}      - Sender's message
{{to_name}}      - Your name (Saidul Alom)
```

### How to check your template:
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Click on **Email Templates**
3. Find your template named "template_saidul"
4. Make sure it contains these variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{to_name}}`

### Example Template:
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

## 🔍 **Step 3: Verify EmailJS Credentials**

Check these in your EmailJS dashboard:

### Service ID: `service_ut25uj5`
1. Go to **Email Services**
2. Verify this service exists and is active
3. Make sure it's connected to your email provider

### Template ID: `template_saidul`
1. Go to **Email Templates**
2. Verify this template exists and is published
3. Check that it uses the correct variable names

### Public Key: `-pwRt2UZszVkXQtFs`
1. Go to **Account** → **API Keys**
2. Verify this is your correct public key
3. Make sure it's not expired

## 🔍 **Step 4: Common Issues & Solutions**

### Issue 1: Template Variables Don't Match
**Solution:** Update your EmailJS template to use these exact variables:
- `{{from_name}}`
- `{{from_email}}`
- `{{message}}`
- `{{to_name}}`

### Issue 2: Service Not Connected
**Solution:** 
1. Go to Email Services in EmailJS dashboard
2. Reconnect your email service (Gmail, Outlook, etc.)
3. Make sure the service is active

### Issue 3: Template Not Published
**Solution:**
1. Go to Email Templates
2. Make sure your template is saved and published
3. Check that it's not in draft mode

### Issue 4: Wrong Credentials
**Solution:**
1. Double-check all three credentials
2. Copy them exactly from EmailJS dashboard
3. Make sure there are no extra spaces

## 🔍 **Step 5: Test with Simple Template**

If the issue persists, try creating a simple test template:

1. Create a new template in EmailJS
2. Use this simple content:
```
Subject: Test Message

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}
```

3. Update the `TEMPLATE_ID` in `src/config/emailjs.ts` with the new template ID
4. Test the form again

## 🔍 **Step 6: Alternative - Use Formspree**

If EmailJS continues to have issues, we can switch to Formspree which is simpler:

1. Go to [Formspree.io](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Get the endpoint URL
5. Replace the contact form with the Formspree version

## 📞 **Need Help?**

Please share:
1. The exact error message from browser console
2. Screenshot of your EmailJS template
3. Whether your email service is properly connected

This will help me provide a more specific solution! 