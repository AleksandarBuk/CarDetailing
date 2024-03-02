import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../style';  // Importing styles
import { interior, exterior } from "../assets";  // Imported images

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} services-section`}>
      <div className={`service ${styles.flexCenter} flex-col ${styles.padding} ${styles.marginY}`} data-aos="fade-right" data-aos-delay="300">
        {/* Using the imported exterior image */}
        <img src={exterior} alt="Exterior Detailing" />
        <h2 className={`${styles.heading2}`}>Exterior Detailing</h2>
        <p className={`${styles.paragraph} ${styles.paragraphMargin}`}>Detailed exterior cleaning to restore the vehicle's shine.</p>
      </div>
      <div className={`service ${styles.flexCenter} flex-col ${styles.padding} ${styles.marginY}`} data-aos="fade-left" data-aos-delay="250">
        {/* Using the imported interior image */}
        <img src={interior} alt="Interior Detailing" />
        <h2 className={`${styles.heading2}`}>Interior Detailing</h2>
        <p className={`${styles.paragraph} ${styles.paragraphMargin}`}>Thorough interior cleaning for a spotless cabin environment.</p>
      </div>
    </section>
  );
};

export default Services;
