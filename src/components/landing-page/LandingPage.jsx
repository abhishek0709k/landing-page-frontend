import React from "react";
import "./LandingPage.css";
import Navbar from "../navbar/Navbar.jsx";
import { Button } from "../button/Button";
import TestimonialSlider from "../testimonialSlider/TestimonialSlider.jsx";
import { Link } from "react-router";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="landing-container">
        <h1>Your Creative Gig Journey Starts Here</h1>
        <p className="about">
        Gigfloww is a platform built to empower freelancers and entertainers by simplifying how they manage and grow their businesses. We offer tools for lead generation, client communication, service packaging, digital contracts, and invoicing—all in one place. Whether you're booking gigs or building your personal brand, Gigfloww helps you streamline operations and focus on what you do best.
        </p>
        <div className="features">
          <div className="feature">Easy Onboarding</div>
          <div className="feature">Verified Clients</div>
          <div className="feature">Secure Payments</div>
          <div className="feature">24/7 Support</div>
        </div>
        <Button type="primary">
          <Link to={"/contact-us"} className="join-btn">Join us</Link>
        </Button>
      </div>
      <TestimonialSlider/>
    </>
  );
};

export default LandingPage;
