import React, { useState } from 'react';
import './modal-newsletter.css';

const ModalNewsletter = ({ showModal, onClose, onSubscribe }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubscribed(true);
        setError('');
        console.log('Email sent:', result);
      } else {
        setError('There was an issue sending the email.');
        console.error('Error:', result.error);
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
      console.error('Error:', error);
    }
  };

  if (!showModal) return null;

  return (
    <div className="modal-newsletter-overlay">
      <div className="modal-newsletter-content">
        <img src="/images/news-letter.png" id="news-letter" alt="Newsletter" />
        <button className="modal-newsletter-close" onClick={onClose}>
          &times;
        </button>
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with the latest news and updates!</p>
        <input
          className="input-subscribe"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {isSubscribed && <p>Thank you for subscribing!</p>}
        <button
          className="modal-newsletter-button"
          onClick={handleSubmit}
          disabled={isSubscribed}
        >
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    </div>
  );
};

export default ModalNewsletter;
