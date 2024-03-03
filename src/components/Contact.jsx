import React, { useState } from 'react';
import styles from '../style';

const Kontakt = () => {
  const [formData, setFormData] = useState({
    ime: '',
    email: '',
    poruka: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Obradi podatke forme ovde, npr., pošalji podatke na backend
    console.log(formData);
    // Očisti polja forme nakon slanja
    setFormData({
      ime: '',
      email: '',
      poruka: ''
    });
  };

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY}`}>
      <div className={`container mx-auto ${styles.padding}`}>
        <h2 className={`${styles.heading2} text-center`}>Kontaktirajte nas</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="ime" className="block text-sm font-medium text-gray-700">Ime</label>
            <input type="text" id="ime" name="ime" value={formData.ime} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="poruka" className="block text-sm font-medium text-gray-700">Poruka</label>
            <textarea id="poruka" name="poruka" value={formData.poruka} onChange={handleChange} rows="4" className="mt-1 p-2 border border-gray-300 rounded-md w-full"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Pošalji</button>
        </form>
        <p className={`${styles.paragraph} mt-4`}>
          Ili nas možete kontaktirati putem e-pošte na: andjeodetailing@gmail.com
        </p>
        <p className={`${styles.paragraph} mt-4`}>
          Ili nas pozovite na: +1234567890
        </p>
        <p className={`${styles.paragraph} mt-4`}>
          Naša adresa: 123 Ulica, Novi Sad, Vojvodina
        </p>
      </div>
    </section>
  );
};

export default Kontakt;
