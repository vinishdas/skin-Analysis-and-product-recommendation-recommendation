import React from "react";
import { Link } from "react-router-dom";
// import "./components/style/Navbar.css";
import "./style/nav.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/analysis">Analysis</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
