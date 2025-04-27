import { useState } from "react";
import { FaReact, FaHome, FaInfoCircle, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <FaReact className="react-icon" /> My App
      </div>

      {/* Desktop Nav Links (Hidden on Mobile) */}
      <ul className="nav-links">
        <li><FaHome /> Home</li>
        <li><FaInfoCircle /> About</li>
        <li><FaEnvelope /> Contact</li>
      </ul>

      {/* Mobile Nav Links (Animated) */}
      <ul className={`mobile-nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <li><FaHome /> Home</li>
        <li><FaInfoCircle /> About</li>
        <li><FaEnvelope /> Contact</li>
      </ul>

      {/* Mobile Menu Toggle Button */}
      <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;