import React from "react";
import "./AboutPage.css";
import ProfilePicture from "../assets/profile.jpg";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, transition: { duration: 3 } }}
      animate={{ opacity: 1, transition: { duration: 3 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="profile-section">
        <img src={ProfilePicture} alt="Profile" className="profile-picture" />
        <h1>About Me</h1>
      </div>

      <div className="info-section">
        <p className="about-me">
          My name is Ralph Constantin, I am Deaf and 24 years old. I am from
          Lebanon, Middle East, and I was raised there until I moved to Canada
          in December 2020 to pursue my education in computer programming at
          Fanshawe College. I just completed the CPA3 - Computer Programming &
          Analysis program with a cumulative GPA of 4.05. I'm a passionate
          software and website developer and am always eager to learn and
          challenge myself.
        </p>
        <div className="left-column">
          <h2>Professional Journey</h2>
          <p>
            As a Technology and Employment Support Specialist at ATN Access
            Inc., I specialize in providing crucial IT helpdesk support to
            colleagues and offering training and employment guidance to clients.
            My role extends beyond technical support to include establishing and
            moderating our community Discord, streamlining workshops, and
            delivering technology and life skills training in various settings.
          </p>

          <h2>Personal Interests</h2>
          <p>
            Outside of work, my passions are gaming and basketball. I proudly
            served as the captain of the Fanshawe College Rocket League esports
            team and was a player on the Lebanese National Team for the Deaf for
            basketball, embodying my commitment to teamwork and leadership.{" "}
          </p>
        </div>
        <div className="right-column">
          <h2>Career</h2>
          <p>
            My career began in Lebanon with ProAbled Employment Experts, where I
            navigated the challenges of deafness to excel in roles encompassing
            website development, HR, and IT support. Moving to Canada in 2020
            marked a new chapter, where I pursued a degree in Computer
            Programming and Analysis at Fanshawe College. My journey through
            multiple co-op experiences, including significant roles at Asign and
            ATN Access Inc., has been a testament to my adaptability and passion
            for technology.
          </p>
          <h2>Motivation</h2>
          <p>
            My drive is fueled by the desire to provide the best life for my
            family and to continually challenge myself. Key moments, such as
            being named captain of the Fanshawe RL team and graduating from a
            mainstream high school in Lebanon without interpreter support, have
            significantly shaped my leadership skills and resilience.{" "}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
