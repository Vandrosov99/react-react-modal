import React from "react";
import Modal from "react-modal";

const Popup = ({ isPopup, closeModal, className }) => {
  const appEl = document.querySelector("#app");
  Modal.setAppElement(appEl);

  return (
    <Modal isOpen={isPopup} onRequestClose={closeModal} style={className}>
      <div role='status' aria-label='Test text'>
        <h1>Popup header</h1>
        <button onClick={closeModal}>Close popup</button>
      </div>
    </Modal>
  );
};

export default Popup;
