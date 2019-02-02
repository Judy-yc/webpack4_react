import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from '@Views/Index';
import Login from '@Views/login';

export default () => (
  <Router>
    <Route path="/home" component={Index} />
    <Route path="/" component={Login} />
  </Router>
);
