# Formspree Setup Guide (Alternative to EmailJS)

Formspree is an even simpler alternative to EmailJS for handling contact forms. Here's how to set it up:

## Step 1: Create Formspree Account

1. Go to [Formspree.io](https://formspree.io/) and sign up for a free account
2. Verify your email address

## Step 2: Create a New Form

1. In your Formspree dashboard, click **New Form**
2. Give your form a name (e.g., "Portfolio Contact Form")
3. Choose your email address where you want to receive messages
4. Click **Create Form**

## Step 3: Get Your Form Endpoint

1. After creating the form, you'll get a unique endpoint URL
2. It will look like: `https://formspree.io/f/xaybzwkd`
3. Copy this URL

## Step 4: Update the Contact Form

1. Open `src/components/ui/ContactFormFormspree.tsx`
2. Replace `'your-formspree-endpoint'` with your actual endpoint:

```typescript
const response = await fetch('https://formspree.io/f/xaybzwkd', {
  // ... rest of the code
});
```

## Step 5: Use Formspree Form Instead

1. Open `src/components/sections/Contact.tsx`
2. Replace the import:

```typescript
// Change this line:
import ContactForm from '../ui/ContactForm';

// To this:
import ContactForm from '../ui/ContactFormFormspree';
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check your email for the message

## Advantages of Formspree

- **Simpler setup** - No need to create email templates
- **Automatic spam protection**
- **Form analytics** - See how many submissions you get
- **No coding required** - Just replace the endpoint URL
- **Free tier includes** 50 submissions per month

## Formspree vs EmailJS

| Feature | Formspree | EmailJS |
|---------|-----------|---------|
| Setup Complexity | Very Simple | Moderate |
| Customization | Limited | High |
| Email Templates | No | Yes |
| Free Submissions | 50/month | 200/month |
| Spam Protection | Built-in | Manual |

## Troubleshooting

### Common Issues:

1. **"Failed to send message" error**
   - Check if the Formspree endpoint URL is correct
   - Verify your Formspree account is active
   - Check browser console for errors

2. **Not receiving emails**
   - Check your spam folder
   - Verify the email address in Formspree settings
   - Make sure the form is activated in Formspree dashboard

3. **CORS errors**
   - Formspree handles CORS automatically
   - Make sure you're using the correct endpoint format

## Formspree Limits (Free Plan):
- 50 form submissions per month
- Basic spam protection
- Email notifications
- Form analytics

## Security Notes

- Formspree handles all security automatically
- No sensitive data stored in your code
- Built-in spam protection
- HTTPS encryption by default

## Recommendation

For a portfolio website, **Formspree is recommended** because:
- It's simpler to set up
- Requires minimal configuration
- Provides good spam protection
- 50 submissions per month is usually sufficient for a portfolio

If you need more customization or higher limits, then EmailJS would be better. 