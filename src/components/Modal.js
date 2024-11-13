import React from 'react';
import './Modal.css'; 

const Modal = ({ showModal, onClose }) => {
  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Please contact us on Discord</h2>
        <p>Click anywhere outside the box to close the modal.</p>
      </div>
    </div>
  );
};

export default Modal;
