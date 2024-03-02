import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "./constants";
import { menu, close, andjeo } from "../assets";
import styles from '../style';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [highlightContact, setHighlightContact] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightContact(true);
  
      setTimeout(() => {
        setHighlightContact(false);
      }, 5000);
    }, 10000);
  
    return () => clearInterval(interval); 
  }, []); 

  const handleNavClick = (nav) => {
    if (nav.title === "Pocetna") {
      return;
    }
    if (nav.title === "O nama") {
      const section = document.getElementById('about-me');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.location.href = '/#aboutme';
      }
    } else if (nav.title === "Kontakt") {
      window.location.href = '/contact'; // Corrected link to Contact component
    }
  };
  

  return (
    <nav className={`w-full flex py-6 justify-between items-center ${styles.navbarBg}`}>
      <Link to="/">
        <img src={andjeo} alt="Logo" className="w-[50px] h-[50px]" />
      </Link>
      <h2 className={`${styles.navbarBrand} text-[18px]`}> Andjeo Detailing</h2>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.title}
            className={`font-poppins font-normal cursor-pointer text-[18px] ${
              index !== navLinks.length - 1 ? 'mr-5' : ''
            } ${
              location.pathname === nav.href || (highlightContact && nav.title === "Kontakt") ? "text-white" : "text-dimWhite"
            }`}
            onClick={() => handleNavClick(nav)}
          >
            {nav.href ? <Link to={nav.href}>{nav.title}</Link> : nav.title}
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={isMenuOpen ? close : menu}
          alt="Menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        <div
          className={`${!isMenuOpen ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          style={{ zIndex: 1000 }}
        >
          <ul className="list-none flex-col justify-end items-center flex-1">
            {navLinks.map((nav) => (
              <li
                key={nav.title}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  location.pathname === nav.href || (highlightContact && nav.title === "Kontakt") ? "text-white" : "text-dimWhite"
                } my-2`}
                onClick={() => handleNavClick(nav)}
              >
                {nav.href ? <Link to={nav.href}>{nav.title}</Link> : nav.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
