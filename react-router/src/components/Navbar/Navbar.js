import React from "react";
import { Link, NavLink } from "react-router-dom";
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
        <NavLink to="/users" className="nav-item">
          Users
        </NavLink>
        <NavLink to="/about" className="nav-item">
          About
        </NavLink>
        <NavLink to="/contact" className="nav-item">
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
