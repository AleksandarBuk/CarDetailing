import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './style';
import { Navbar, Introduction, Services, AboutMain, AboutUs, Footer, CTA, Contact } from "./components";

export const App = () => {
  const [loadAnimation, setLoadAnimation] = useState(styles.fadeInScaleUp);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadAnimation('');
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className={`w-full overflow-hidden ${loadAnimation}`}>
        <div className={styles.navBackground}>
          <div className={styles.boxWidth}>
            <Navbar />
          </div>
        </div>

        <Routes>
          <Route path="/" element={
            <div className={styles.navBackground}>
              <div className={styles.boxWidth}>
                <Introduction />
                <AboutMain />
                <Services />
                <CTA />
                <Footer />
              </div>
            </div>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
