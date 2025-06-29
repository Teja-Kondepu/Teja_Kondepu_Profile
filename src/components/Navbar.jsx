import React, { useState } from "react";
import { FaCode, FaHome, FaUser, FaCodeBranch, FaProjectDiagram, FaEnvelope, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo"><FaCode /></div>
        <div className={`nav-links${open ? " active" : ""}`}>
          <a href="#home" onClick={() => setOpen(false)}><FaHome /> Home</a>
          <a href="#about" onClick={() => setOpen(false)}><FaUser /> About</a>
          <a href="#skills" onClick={() => setOpen(false)}><FaCode /> Skills</a>
          <a href="#works" onClick={() => setOpen(false)}><FaProjectDiagram /> Works</a>
          <a href="#contact" onClick={() => setOpen(false)}><FaEnvelope /> Contact</a>
        </div>
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;