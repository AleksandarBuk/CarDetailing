import React, { useState } from 'react';
import styles from '../style';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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
    // Handle form submission here, e.g., send data to backend
    console.log(formData);
    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY}`}>
      <div className={`container mx-auto ${styles.padding}`}>
        <h2 className={`${styles.heading2} text-center`}>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="mt-1 p-2 border border-gray-300 rounded-md w-full"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
        </form>
        <p className={`${styles.paragraph} mt-4`}>
          Or you can reach us via email at: andjeodetailing@gmail.com
        </p>
        <p className={`${styles.paragraph} mt-4`}>
          Or give us a call at: +1234567890
        </p>
        <p className={`${styles.paragraph} mt-4`}>
          Our address: 123 Street Name, Novi Sad, Vojvodina
        </p>
      </div>
    </section>
  );
};

export default Contact;
