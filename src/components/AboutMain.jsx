import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../style';
import { owner } from "../assets";

const AboutMain = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} about-us-section`}>
      <div className={`container mx-auto ${styles.padding} sm:my-8 my-3`}>
        <div className="flex flex-row items-center justify-center text-center" data-aos="fade-down" data-aos-delay="200">
          <div className="flex flex-col items-center justify-center mr-8" data-aos="fade-down" data-aos-delay="200">
            <h3 className={`${styles.heading3}`}>Vukašin</h3>
            <img src={owner} alt="Vlasnik" className="w-48 h-48 rounded-full mt-4" />
          </div>
          <div className="flex flex-col items-center justify-center" data-aos="fade-down" data-aos-delay="200">
            <p className={`${styles.heading3}`}>- “Volim posao koji radim”</p>
          </div>
        </div>
        <div >
          <h2 className={`${styles.heading2} mt-8 text-center`} data-aos="fade-down" data-aos-delay="200">O nama</h2>
          <p className={`${styles.paragraph} mt-4`} data-aos="fade-down" data-aos-delay="250">
            Dobrodošli u Andjeo Detailing, gde vaše vozilo biva tretirano sa neuporedivom pažnjom i brigom. Naš tim, predvođen strastvenim osnivačem Vukašinom, posvećen je pružanju najvišeg standarda usluge, osiguravajući da svaki detalj vašeg iskustva pranja automobila bude besprekoran.
          </p>
          <p className={`${styles.paragraph} mt-4`} data-aos="fade-down" data-aos-delay="300">
            Sa najsavremenijom opremom i ekološki prihvatljivim proizvodima, obećavamo ne samo čist automobil već i doprinos čistijem okruženju. Obezbedite nam da održimo sjaj vašeg vozila i uživajte u vožnji u automobilu koji se oseća kao potpuno nov.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
