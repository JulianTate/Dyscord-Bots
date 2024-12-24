import fetch from 'node-fetch';

// Replace with your MailerLite API key
const API_KEY = process.env.MAILERLITE_API_KEY;
const MAILERLITE_API_URL = 'https://api.mailerlite.com/api/v2';

// Create an API call to add a subscriber to a MailerLite list
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body; // Get the email address from the request body

    const data = {
      email: email, // The email to be added
      fields: {
        name: 'Subscriber', // Optionally, you can add a name or any custom field
      }
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-MailerLite-ApiKey': API_KEY,  // Pass the API key for authentication
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(`${MAILERLITE_API_URL}/subscribers`, options);
      const result = await response.json();

      if (response.ok) {
        return res.status(200).json({ message: 'Subscription successful', result });
      } else {
        return res.status(500).json({ message: 'Failed to subscribe', error: result });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Failed to send request', error: error.message });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
