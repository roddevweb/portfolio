import React, { useState } from 'react';
import './ContactForm.css';

const translations = {
  fr: {
    title: "Contactez-moi",
    name: "Nom",
    email: "Email",
    message: "Message",
    send: "Envoyer",
    messageSent: "Message envoyé!"
  },
  en: {
    title: "Contact Me",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    messageSent: "Message sent!"
  }
};

const ContactForm = ({ language = 'fr' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const text = translations[language] || translations.fr;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, for example sending the data to an API
    alert(text.messageSent);
  };

  return (
    <section id="contact" className="text-white p-5">
      <div className="container">
        <h2 className="section-title">{text.title}</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{text.name}</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">{text.email}</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">{text.message}</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-info">{text.send}</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
