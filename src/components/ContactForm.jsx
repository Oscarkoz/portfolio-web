import React, { useState } from 'react';

const ContactForm = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setMessage('Tack för ditt meddelande!');
  };

  return (
    <section id="contact" className="section">
      <h2 className="text-3xl font-bold mb-4">Kontakt</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" placeholder="Ditt namn" required />
        <input type="email" placeholder="Din e-post" required />
        <textarea placeholder="Meddelande" rows="4" required />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Skicka
        </button>
      </form>
      {message && <p className="text-green-600 mt-4">{message}</p>}
    </section>
  );
};

export default ContactForm;
