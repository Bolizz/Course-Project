import React from "react";
import { Link } from "react-router-dom";
import "./admin.css";
const admin = () => {
  return (
    <div className="root">
      <div className="inner-head">
        <h1>admin</h1>
      </div>
      <div className="content">
        <Link to="/drivers">
          <p className="box">Drivers</p>
        </Link>
        <Link className="box" to="/maintenance">
          <p>Maintenance</p>
        </Link>
        <Link className="box" to="/fueling">
          <p>Fuel filler</p>
        </Link>
        <Link className="box" to="/vehicles">
          <p>Vehicles</p>
        </Link>
      </div>
    </div>
  );
};

export default admin;
