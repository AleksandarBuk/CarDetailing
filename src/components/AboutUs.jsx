import React from 'react';
import styles from '../style';

const AboutUs = () => {
  return (
    <section id="about-me" className={`${styles.flexCenter} ${styles.paddingY}`}>
      <div className={`container mx-auto ${styles.padding}`}>
        <h2 className={`${styles.heading2} text-center`}>About Us</h2>
        <p className={`${styles.paragraph} mt-4`}>
          Welcome to Andjeo Detailing! We are passionate about car cleaning and pay meticulous attention to detail. Our team is dedicated to providing the highest standard of service, ensuring that every aspect of your car wash experience is impeccable.
        </p>
        <p className={`${styles.paragraph} mt-4`}>
          At Andjeo Detailing, we use state-of-the-art equipment and eco-friendly products to not only clean your car but also contribute to a cleaner environment. Trust us to maintain your vehicle's brilliance, leaving it feeling brand new every time.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
