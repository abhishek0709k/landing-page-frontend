import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router";
import Navbar from "../navbar/Navbar";
const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skill: "",
    portfolio: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.skill)
      return alert("Please fill in required fields");
    await fetch("https://landing-project-backend.onrender.com/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setSubmitted(true);
    navigate("/");
  };

  return submitted ? (
    <h2>Thank you for signing up!</h2>
  ) : (
    <>
      <Navbar />
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
          required
        />
        <input
          name="skill"
          placeholder="Skill Category"
          onChange={handleChange}
          required
        />
        <input
          name="portfolio"
          placeholder="Portfolio Link"
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
        <p>Sign Up to continue with site...</p>
      </form>
    </>
  );
};

export default Signup;
