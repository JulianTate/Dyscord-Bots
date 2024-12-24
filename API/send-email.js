// /api/send-email.js
import mailgun from 'mailgun-js';

const DOMAIN = 'your-domain.com';  // Replace with your domain
const API_KEY = 'your-mailgun-api-key';  // Replace with your Mailgun API key
const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;  // Get the email address from the request body

    const data = {
      from: 'your-email@your-domain.com', // Your verified email address in Mailgun
      to: 'recipient@example.com',  // Email where you want to receive notifications
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
