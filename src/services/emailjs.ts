import emailjs from '@emailjs/browser';

// EmailJS configuration using Vite environment variables
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

// Initialize EmailJS only if we have the public key
if (PUBLIC_KEY) {
  emailjs.init(PUBLIC_KEY);
}

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

// Function to send email notification to your team
export const sendContactNotification = async (formData: ContactFormData): Promise<void> => {
  try {
    // Prepare the email template parameters
    const templateParams = {
      to_email: 'hello@euphoricai.io',
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'Not specified',
      subject: formData.subject,
      message: formData.message,
      submission_date: new Date().toLocaleString(),
      reply_to: formData.email
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );

    if (response.status !== 200) {
      throw new Error('Failed to send email notification');
    }

    console.log('Email notification sent successfully:', response);
  } catch (error) {
    console.error('Failed to send email notification:', error);
    throw error;
  }
};

// Function to validate EmailJS configuration
export const validateEmailJSConfig = (): boolean => {
  return !!(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);
};