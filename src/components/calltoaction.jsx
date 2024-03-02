import React, { useState } from 'react';
import styles from '../style';

const CallToAction = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const handleClose = () => {
    setShowContactInfo(false);
  };

  return (
    <div className={`${styles.flexCenter} mt-4`}>
      <button
        className={`${styles.blinkingButton} p-3 text-white cursor-pointer outline outline-offset-2 outline-1`}
        onClick={() => setShowContactInfo(true)}
        style={{
          userSelect: 'none',
          transition: 'transform 0.3s, box-shadow 0.3s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        tabIndex={0}
        aria-label="Contact us for more information"
      >
        Kontaktiraj Nas
      </button>
      {showContactInfo && (
        <div className="modal-background">
          <div className="modal-container">
            <button className="modal-close-button" onClick={handleClose}>X</button>
            <div className="text-center">
              <p>Obezbedite svom automobilu tretman koji zaslužuje</p>
              <p>Email: agency@email.com</p>
              <p>Phone: +123456789</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CallToAction;
