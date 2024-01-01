import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LinkedInLogo from "../assets/linkedin_logo.png";
import GitHubLogo from "../assets/github_logo.png";
import InstagramLogo from "../assets/instagram_logo.png";
import "./Footer.css";
import { motion, useAnimation } from "framer-motion";

const Footer = () => {
  const location = useLocation();
  const footerAnimation = useAnimation();

  useEffect(() => {
    footerAnimation
      .start({
        opacity: 0,
        transition: { duration: 0.2 },
      })
      .then(() => {
        footerAnimation.start({
          opacity: 1,
          transition: { duration: 3 },
        });
      });
  }, [location, footerAnimation]);

  return (
    <motion.footer
      className="footer-container"
      initial={{ opacity: 0 }}
      animate={footerAnimation}
    >
      <div className="socials-container">
        <a
          href="https://www.linkedin.com/in/ralph-constantin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedInLogo} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/notleopard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubLogo} alt="GitHub" />
        </a>
        <a
          href="https://www.instagram.com/ralph.constantin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={InstagramLogo} alt="Instagram" />
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
