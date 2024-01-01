import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavigationBar.css";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const NavigationBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMenuItems = () => [
    <MenuItem
      onClick={() => {
        handleClose();
        navigate("/");
      }}
      key="home"
      className="mobile-items"
    >
      Home
    </MenuItem>,
    <MenuItem
      onClick={() => {
        handleClose();
        navigate("/about");
      }}
      key="about"
      className="mobile-items"
    >
      About
    </MenuItem>,
    <MenuItem
      onClick={() => {
        handleClose();
        navigate("/portfolio");
      }}
      key="portfolio"
      className="mobile-items"
    >
      Portfolio
    </MenuItem>,
    <MenuItem
      onClick={() => {
        handleClose();
        navigate("/resume");
      }}
      key="resume"
      className="mobile-items"
    >
      Resume
    </MenuItem>,
    <MenuItem
      onClick={() => {
        handleClose();
        navigate("/moments");
      }}
      key="moments"
      className="mobile-items"
    >
      Notable Moments
    </MenuItem>,
    <MenuItem
      onClick={() => {
        handleClose();
        navigate("/esports");
      }}
      key="esports"
      className="mobile-items"
    >
      Esports
    </MenuItem>,
    <MenuItem
      onClick={() => {
        handleClose();
        navigate("/contact");
      }}
      key="contact"
      className="mobile-items"
    >
      Contact Me
    </MenuItem>,
  ];
  return (
    <nav className="navbar">
      <MenuIcon className="mobile-menu-icon" onClick={handleClick} />

      <Menu
        id="nav-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        slotProps={{ paper: { sx: { bgcolor: "#0a243a" } } }}
      >
        {renderMenuItems()}
      </Menu>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/moments">Notable Moments</Link>
        <Link to="/esports">Esports</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
