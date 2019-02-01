import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from '@Views/Index';

export default () => (
  <Router>
    <Route path="/home" component={Index} />
  </Router>
);
