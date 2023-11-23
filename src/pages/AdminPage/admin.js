import React from 'react';
import { Link } from 'react-router-dom';
import './admin.css'
const admin = () => {
  return (
    <div className='root'>
      <div className='inner-head'>
        <h1>Admin</h1>
      </div>
    <div className='content'>
        <Link to="/drivers">
          <p className='box'>Drivers</p>
         </Link>
         <Link className='box' to="/drivers">
         <p>Maintenance</p>
        </Link>
        <Link className='box' to="/drivers">
             <p>Fuel filler</p>
         </Link>
        <Link className='box' to="/drivers">
         <p>Vehicles</p>
        </Link>
    </div>
    </div>
  );
};

export default admin;