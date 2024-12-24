import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import ModalNewsletter from './components/modal-newsletter'; // Import Newsletter Modal
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';

function App() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);

  // Show the newsletter modal based on subscription or dismissal
  useEffect(() => {
    const hasSubscribed = localStorage.getItem('newsletterSubscribed');
    const hasClosed = localStorage.getItem('newsletterClosed');
    
    if (!hasSubscribed && !hasClosed) {
      setShowNewsletterModal(true);
    }
  }, []);

  const handleContactClick = () => {
    setShowContactModal(true); // Open contact modal
  };

  const closeContactModal = () => {
    setShowContactModal(false); // Close contact modal
  };

  const closeNewsletterModal = () => {
    setShowNewsletterModal(false);
    localStorage.setItem('newsletterClosed', 'true'); // Mark as dismissed
  };

  const handleSubscribe = () => {
    localStorage.setItem('newsletterSubscribed', 'true');
    setShowNewsletterModal(false); // Close modal after subscribing
    localStorage.removeItem('newsletterClosed'); // Ensure dismissal is cleared
  };

  return (
    <div className="App">
      <Navbar onContactClick={handleContactClick} />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
      
      {/* Contact Modal */}
      <Modal showModal={showContactModal} onClose={closeContactModal}>
        <h2>Contact Us</h2>
        <p>Feel free to reach out to us anytime!</p>
      </Modal>

      {/* Newsletter Modal */}
      <ModalNewsletter
        showModal={showNewsletterModal}
        onClose={closeNewsletterModal}
        onSubscribe={handleSubscribe}
      />
    </div>
  );
}

export default App;
