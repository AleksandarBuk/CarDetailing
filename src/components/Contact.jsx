import React from 'react';
import styles from '../style';

const Contact = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY}`}>
      <div className={`container mx-auto ${styles.padding}`}>
        <h2 className={`${styles.heading2} text-center`}>Contact Us</h2>
        <p className={`${styles.paragraph} mt-4`}>
          You can reach us via email at: example@example.com
        </p>
        <p className={`${styles.paragraph} mt-4`}>
          Or give us a call at: +1234567890
        </p>
        <p className={`${styles.paragraph} mt-4`}>
          Our address: 123 Street Name, City, Country
        </p>
      </div>
    </section>
  );
};

export default Contact;
