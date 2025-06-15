import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const formRef = useRef();
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setMessage('✅ Tack för ditt meddelande!');
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("❌ EmailJS fel:", error);
        setMessage('❌ Något gick fel. Försök igen senare.');
      });
  };

  return (
    <section id="contact" className="section py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Kontakt</h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        name="contact_form"
        className="contact-form w-full max-w-xl mx-auto flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Ditt namn"
          required
          className="p-3 border rounded-md dark:bg-gray-800 dark:text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Din e-post"
          required
          className="p-3 border rounded-md dark:bg-gray-800 dark:text-white"
        />
        <input
          type="text"
          name="title"
          placeholder="Ämne"
          required
          className="p-3 border rounded-md dark:bg-gray-800 dark:text-white"
        />
        <textarea
          name="message"
          placeholder="Meddelande"
          rows="4"
          required
          className="p-3 border rounded-md dark:bg-gray-800 dark:text-white"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Skicka
        </button>
      </form>

      {message && (
        <p className="text-center text-green-600 dark:text-green-400 mt-4">{message}</p>
      )}
    </section>
  );
};

export default ContactForm;
