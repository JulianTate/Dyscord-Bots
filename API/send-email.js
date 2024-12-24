// /api/send-email.js
import mailgun from 'mailgun-js';

// Use environment variables to access your sensitive data
const DOMAIN = process.env.MAILGUN_DOMAIN;  // Your Mailgun domain (from the environment variable)
const API_KEY = process.env.MAILGUN_API_KEY;  // Your Mailgun API key (from the environment variable)

const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;  // Get the email address from the request body

    const data = {
      from: 'postmaster@sandbox13e77da585994a3aad91c9cc8ed214a8.mailgun.org',  // Your verified email address from Mailgun
      to: 'juliantatemartin@icloud.com',        // The email where you want to receive notifications
      subject: 'New Subscription',
      text: `A new user has subscribed with the email: ${email}`,
    };

    try {
      const response = await mg.messages().send(data);
      return res.status(200).json({ message: 'Email sent successfully', response });
    } catch (error) {
      return res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
