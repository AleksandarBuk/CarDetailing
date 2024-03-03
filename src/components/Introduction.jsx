import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Dodao Link komponentu
import '../index.css';

const Introduction = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="introduction-section">
      <div 
        className="background-image-container"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }} // Prilagođeno za suptilniji efekat
      ></div>
      <div className="slogan-container">
        <h1 className="slogan animate-slogan">Anđeo Detailing</h1>
        <p className="sub-slogan animate-sub-slogan">Savršenstvo je u svakom detalju</p>
        {/* Koristimo Link komponentu umesto običnog dugmeta */}
        <Link to="/aboutus" className="cta-button">Saznaj više</Link>
      </div>
    </section>
  );
};

export default Introduction;
