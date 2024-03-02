import React, { useEffect, useState } from 'react';
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
        style={{ transform: `translateY(${offsetY * 0.3}px)` }} // Adjusted for a subtler effect
      ></div>
      <div className="slogan-container">
        <h1 className="slogan animate-slogan">Anđeo Detailing</h1>
        <p className="sub-slogan animate-sub-slogan">Savršenstvo je u svakom detalju</p>
        <button className="cta-button">Saznaj više</button>
      </div>
    </section>
  );
};

export default Introduction;
