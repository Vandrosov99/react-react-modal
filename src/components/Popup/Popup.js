import React, { useState } from "react";
import "@reach/dialog/styles.css";
import { Dialog } from "@reach/dialog";

const Popup = ({ isPopup, closeModal, className }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Dialog isOpen={isPopup} onDismiss={closeModal}>
      <div role='status' aria-label={isPressed ? "Enable" : "Disable"}>
        {isPressed ? "lolE" : "lolD"}
      </div>
      <button className='close-button' onClick={closeModal}>
        <span>Close</span>
        <span aria-hidden>×</span>
      </button>
      <button
        onClick={() => {
          setIsPressed(!isPressed);
        }}>
        updateState
      </button>
    </Dialog>
  );
};

export default Popup;
