import React from 'react';
import styles from '../style';

const AboutUs = () => {
  return (
    <section id="o-nama" className={`${styles.flexCenter} ${styles.paddingY}`}>
      <div className={`container mx-auto ${styles.padding}`}>
        <h2 className={`${styles.heading2} text-center`}>O nama</h2>
        <p className={`${styles.paragraph} mt-4`}>
          Dobrodošli u Andjeo Detailing! Strastveno se bavimo čišćenjem automobila i obraćamo pažnju na svaki detalj. Naš tim je posvećen pružanju najvišeg standarda usluge, osiguravajući da je svaki aspekt vašeg iskustva prilikom pranja automobila besprekoran.
        </p>
        <p className={`${styles.paragraph} mt-4`}>
          U Andjeo Detailing-u koristimo najsavremeniju opremu i ekološki prihvatljive proizvode kako bismo ne samo očistili vaš automobil, već i doprineli čistijem okruženju. Obezbedite nam da održimo sjaj vašeg vozila, ostavljajući ga svaki put kao potpuno novo.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
