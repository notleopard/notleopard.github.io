import React from "react";
import "./ContactPage.css";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, transition: { duration: 3 } }}
      animate={{ opacity: 1, transition: { duration: 3 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="form-container">
        <h2>Get in Touch</h2>
        <iframe
          title="Contact Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSe0OtIoZrp8ISZJEEh4Va1vR_8J2rUDihWpIeq3WC5OS9jI3Q/viewform?embedded=true"
          width="750"
          height="1250"
          style={{ margin: 0, border: 0 }}
        >
          Loading…
        </iframe>
      </div>
    </motion.div>
  );
};

export default ContactPage;
