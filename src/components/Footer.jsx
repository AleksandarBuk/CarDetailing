import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../style';

const Footer = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`w-full ${styles.navBackground} flex py-6 justify-between items-center`}>
      <div className={`container ${styles.flexCenter} px-5 py-8 mx-auto flex-wrap`} data-aos="fade-down" data-aos-delay="100">
        <div className={`${styles.flexCenter} flex-col md:flex-row items-center text-gray-400 mb-4 md:mb-0`}>
          <FaEnvelope className="text-blue-500 mr-2" />
          <a href="mailto:andjela.dro.photography@gmail.com" className={`${styles.hoverEffect} hover:text-blue-300 transition-colors duration-300`}>andjeo.detailing@gmail.com</a>
        </div>
        <p className={`${styles.paragraph} text-sm sm:w-1/3 w-full text-center`}>© {new Date().getFullYear()} Vukasin Andjelkovic. All rights reserved.</p>
        <div className={`${styles.flexCenter} md:justify-end sm:w-1/3 w-full`}>
          <a href="https://www.facebook.com/vukasin.andjelkovic" className={`${styles.hoverEffect} text-gray-400 hover:text-blue-500 transition-colors duration-300`}>
            <FaFacebook className="mr-4" />
          </a>
          <a href="https://www.instagram.com/andjeo.99" className={`${styles.hoverEffect} text-gray-400 hover:text-blue-500 transition-colors duration-300`}>
            <FaInstagram className="mr-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
