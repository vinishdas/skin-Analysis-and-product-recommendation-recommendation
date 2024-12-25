import React from "react";
import "./style/nav.css";
import { Link } from "react-router-dom";
// import "./components/style/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <Link to="/">Home</Link>
       <Link to="/analysis">Analysis</Link>
        <Link to="/about">About</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
