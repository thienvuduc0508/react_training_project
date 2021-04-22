import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img
            src={require("../../assets/img/logo192.png").default}
            alt="logo"
          />
        </Link>
      </div>
      <div className="nav-link">
        <Link to="/home" className="nav-item">
          Home
        </Link>
        <Link to="/about" className="nav-item">
          About
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
