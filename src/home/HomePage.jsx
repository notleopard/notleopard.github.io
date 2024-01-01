import React from "react";
import "./HomePage.css";
import RCLogo from "../assets/NoBgLogo.png";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      className="main-header"
      initial={{ opacity: 0, transition: { duration: 3 } }}
      animate={{ opacity: 1, transition: { duration: 3 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <motion.img
        src={RCLogo}
        alt="Ralph Constantin Logo"
        className="logo"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
      <h1>Ralph Constantin</h1>
      <h2>Software Developer</h2>
      <div className="typing-container">
        <p>Welcome to my portfolio!</p>
      </div>
    </motion.div>
  );
};

export default HomePage;
