import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./navigation/NavigationBar";
import "./App.css";
import Footer from "./footer/Footer";
import AnimatedRoutes from "./animated-routes/AnimatedRoutes";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
};

export default App;
