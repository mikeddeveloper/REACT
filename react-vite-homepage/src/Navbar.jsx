import { FaReact, FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaReact className="react-icon" /> My Vite + React App
      </div>
      <ul className="nav-links">
        <li><FaHome /> Home</li>
        <li><FaInfoCircle /> About</li>
        <li><FaEnvelope /> Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;