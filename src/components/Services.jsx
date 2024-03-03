import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../style';  // Uvoz stila
import { interior, exterior } from "../assets";  // Uvoz slika

const Usluge = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} services-section`}>
      <div className={`usluga ${styles.flexCenter} flex-col ${styles.padding} ${styles.marginY}`} data-aos="fade-right" data-aos-delay="300">
        {/* Korišćenje uvožene slike eksterijera */}
        <img src={exterior} alt="Detaljno čišćenje eksterijera" />
        <h2 className={`${styles.heading2}`}>Eksterijer</h2>
        <p className={`${styles.paragraph} ${styles.paragraphMargin}`}>Detaljno čišćenje spoljašnjosti kako bi se povratio sjaj vozila.</p>
      </div>
      <div className={`usluga ${styles.flexCenter} flex-col ${styles.padding} ${styles.marginY}`} data-aos="fade-left" data-aos-delay="250">
        {/* Korišćenje uvožene slike enterijera */}
        <img src={interior} alt="Detaljno čišćenje enterijera" />
        <h2 className={`${styles.heading2}`}>Interijer</h2>
        <p className={`${styles.paragraph} ${styles.paragraphMargin}`}>Grundirano čišćenje unutrašnjosti za besprekoran ambijent kabine.</p>
      </div>
    </section>
  );
};

export default Usluge;
