import React from 'react';
import { Route } from 'react-router-dom';
import Index from '@Views/Index';
import Login from '@Views/login';
import Compute from '@Views/Compute';
import Other from '@Views/Other';
import Container from '../layouts/HomeContainer';

export default () => (
  <Container>
    <Route key="home" path="/home" component={Index} />
    <Route key="root" path="/login" component={Login} />
    <Route key="compute" path="/compute" component={Compute} />
    <Route key="other" path="/other" component={Other} />
  </Container>
);
