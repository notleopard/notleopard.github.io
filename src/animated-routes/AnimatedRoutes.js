import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../home/HomePage";
import AboutPage from "../about/AboutPage";
import PortfolioPage from "../portfolio/PortfolioPage";
import ResumePage from "../resume/ResumePage";
import NotableMomentsPage from "../moments/NotableMomentsPage";
import ContactPage from "../contact/ContactPage";
import EsportsPage from "../esports/EsportsPage";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/moments" element={<NotableMomentsPage />} />
        <Route path="/esports" element={<EsportsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
