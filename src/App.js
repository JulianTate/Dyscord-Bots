import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import HomePage from './components/HomePage'; // Import HomePage component
import ProductPage from './components/ProductPage'; // Import ProductPage component

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleContactClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Navbar onContactClick={handleContactClick} />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
      
      <Modal showModal={showModal} onClose={closeModal} />
    </div>
  );
}

export default App;
