import React from "react";
import { NavLink, Route } from "react-router-dom";
import Company from "./Company";
import Service from "./Service";
import "./about.css";
const About = ({ match }) => {
  return (
    <div>
        <div className="about-item">
          <NavLink to={`${match.url}/company`}>Our's Company</NavLink>
          <NavLink to={`${match.url}/service`}>Service</NavLink>
        </div>
        <hr />
        <Route path={`${match.url}/company`} component={Company} />
        <Route path={`${match.url}/service`} component={Service} />
    </div>
  );
};

export default About;
