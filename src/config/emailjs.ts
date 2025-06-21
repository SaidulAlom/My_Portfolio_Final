import emailjs from '@emailjs/browser';

// EmailJS Configuration
// You need to replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Your EmailJS Service ID (found in EmailJS dashboard)
  // If you create a new Gmail service, replace this with the new Service ID
  SERVICE_ID: 'service_y6e3npx', // ← New Gmail Service ID
  
  // Your EmailJS Template ID (found in EmailJS dashboard)
  TEMPLATE_ID: 'template_saidul',
  
  // Your EmailJS Public Key (found in EmailJS dashboard)
  PUBLIC_KEY: '-pwRt2UZszVkXQtFs',
};

// Initialize EmailJS with your public key
export const initializeEmailJS = () => {
  // This will be called in your main App component
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};