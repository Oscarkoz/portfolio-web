import React, { useState } from 'react';

const ContactForm = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setMessage('Tack för ditt meddelande!');
  };

  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold mb-4">Kontakt</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input className="border p-2" type="text" placeholder="Ditt namn" required />
        <input className="border p-2" type="email" placeholder="Din e-post" required />
        <textarea className="border p-2" placeholder="Meddelande" required />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded">Skicka</button>
      </form>
      {message && <p className="text-green-600 mt-4">{message}</p>}
    </section>
  );
};

export default ContactForm;
