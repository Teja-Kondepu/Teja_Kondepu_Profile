import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2025 Teja Kondepu. All rights reserved.</p>
    <div className="social-links">
      <a href="https://github.com/Teja-Kondepu" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/teja-kondepu/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="#"><FaTwitter /></a>
    </div>
  </footer>
);

export default Footer;