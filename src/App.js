import React, { useState } from 'react';
import Header from './Header';
import Login from './pages/Login';
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import admin from './pages/AdminPage/admin'
import drivers from './pages/AdminPage/driversPage/drivers';
import './index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (<Router>
    <div className="full-page">
      <Header/>
      <Switch>
      <Route path='/about' exact component={About} />
      <Route path='/services' exact component={Services} />
      <Route path='/contact' exact component={Contact} />
      <Route path='/login' exact component={Login} />
      <Route path='/admin' exact component={admin} />
      <Route path='/drivers' exact component={drivers} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
