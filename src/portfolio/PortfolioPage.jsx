import React from "react";
import "./PortfolioPage.css";
import GeoGreetingLogo from "../assets/GeoGreeting_Logo.png";
import RLReplayLogo from "../assets/RLReplay_Logo.png";
import { motion } from "framer-motion";

const projects = [
  {
    image: GeoGreetingLogo,
    title: "GeoGreeting",
    description:
      "This project is a simple mobile application built using React Native and Expo, designed to let users create personalized greeting cards with a location tag in it, and send it to their loved ones through Email or SMS! Also, users can save the greeting cards for later viewing!",
    tools: ["React Native", "Node.js", "Expo", "Firebase"],
    repo: "https://github.com/notleopard/GeoGreeting",
  },
  {
    image: RLReplayLogo,
    title: "RL Replays Stats Analysis",
    description:
      'This mini Python script is designed to extract and update player statistics from Rocket League replay files. It uses the "carball" library to decompile replay files, extracts player statistics, and updates them in a CSV file. This tool is useful if you are trying to track your team stats in Rocket League!',
    tools: ["Python", "carball"],
    repo: "https://github.com/notleopard/RL-replays-stats",
  },
];

const PortfolioPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, transition: { duration: 3 } }}
      animate={{ opacity: 1, transition: { duration: 3 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="portfolio-wrapper">
        <h1 className="portfolio-title">Portfolio</h1>
        <div className="portfolio-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tools-used">
                  <strong>Tools Used:</strong> {project.tools.join(", ")}
                </div>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-link"
                >
                  Code Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
