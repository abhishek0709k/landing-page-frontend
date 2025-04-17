import React, { useState } from "react";
import "./ContactUs.css";
import { Link } from "react-router";
import Navbar from "../navbar/Navbar";
import axios from "axios";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://landing-project-backend.onrender.com/contact-us",
        formData
      );
      console.log(response);
      setSubmitted(true);
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-container">
        <h2>Contact Us</h2>
        {submitted ? (
          <>
            <p className="thank-you-msg">
              Thanks for reaching out! We'll get back to you soon.
            </p>
            <Link to={"/"} className="home-button">
              Home
            </Link>
          </>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              onChange={handleChange}
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        )}
      </div>
    </>
  );
};

export default ContactUs;
