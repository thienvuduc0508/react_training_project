import React from "react";
import { NavLink, Route } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Company from "./Company";
import Service from "./Service";
import "./about.css";
const About = ({ match }) => {
  return (
    <div>
      <Layout>
        <div className="about-item">
          <NavLink to={`${match.url}/company`}>Our's Company</NavLink>
          <NavLink to={`${match.url}/service`}>Service</NavLink>
        </div>
        <hr />
        <Route path={`${match.url}/company`} component={Company} />
        <Route path={`${match.url}/service`} component={Service} />
      </Layout>
    </div>
  );
};

export default About;
