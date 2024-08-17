import React, { useState, useRef } from 'react';
import './Contact.css';
import { MdAttachEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";
import { ImWhatsapp } from "react-icons/im";
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  // State to manage form inputs, errors, and messages
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Strict Regex for name validation (only letters, spaces, hyphens, and apostrophes)
  const nameRegex = /^[a-zA-Z\s'-]+$/;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "Name can only contain letters, spaces, hyphens, and apostrophes";
      // Auto-hide error after 8 seconds
      setTimeout(() => {
        setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
      }, 8000); // 8000 milliseconds = 8 seconds
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs.sendForm('service_qtyadkk', 'template_a4gicdz', form.current, 'unMpfQ-R-TCO-9mTn')
        .then((result) => {
          console.log('Email sent successfully');
          setSuccessMessage('Your message has been sent successfully!');
          setErrorMessage(''); // Clear any previous error messages
          setFormData({ name: '', email: '', message: '' }); // Reset form after success
          setErrors({}); // Clear any errors

          // Hide success message after 5 seconds
          setTimeout(() => {
            setSuccessMessage('');
          }, 5000);
        }, (error) => {
          console.log('Failed to send email:', error.text);
          setErrorMessage('Failed to send your message. Please try again later.');
          setSuccessMessage(''); // Clear any previous success messages

          // Hide error message after 5 seconds
          setTimeout(() => {
            setErrorMessage('');
          }, 5000);
        });
    } else {
      console.log('Validation failed');
    }
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdAttachEmail className='contact__option-icon' size={28} />
            <h4>Email</h4>
            <h4>differ454@hotmail.com</h4>
            <a href='mailto:Differ454@hotmail.com' target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <SiLinkedin className='contact__option-icon' size={28} />
            <h4>Linkedin</h4>
            <a href='https://www.linkedin.com/in/diegoruiz454/' target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className='contact__option-icon' size={28} />
            <h4>WhatsApp</h4>
            <a href='https://api.whatsapp.com/send?phone=+4528592968' target='_blank'>Send a message</a>
          </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name='name'
            placeholder='Your Full Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error-message">{errors.name}</p>}

          <input
            type="email"
            name='email'
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error-message">{errors.email}</p>}

          <textarea
            name="message"
            rows={7}
            placeholder='Your Message'
            value={formData.message}
            onChange={handleChange}
            required
          />
          {errors.message && <p className="error-message">{errors.message}</p>}

          <button type='submit' className='btn btn-primary'>Send a message</button>

          {/* Display success or error message */}
          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
