import styles from "./App.module.css";
import { useState } from "react";
// import Notification from "../Notification/Notification";
import Popup from "../Popup/Popup";

const App = () => {
  // const [isNotification, setIsNotificationi] = useState(false);
  const [isPopup, setIsPopup] = useState(false);

  const openModal = () => {
    setIsPopup(true);
  };

  const closeModal = () => {
    setIsPopup(false);
  };

  return (
    <div className={styles.Main}>
      <h1 className={styles.Title}>Main app</h1>
      <button onClick={openModal}>Open Popup</button>
      <div id='app'>
        <Popup
          isPopup={isPopup}
          closeModal={closeModal}
          className={styles.PopupContainer}
        />
      </div>
    </div>
  );
};

export default App;
