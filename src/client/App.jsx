// @flow

import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import { APP_NAME } from '../shared/config';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import { HOME_PAGE_ROUTE, HELLO_PAGE_ROUTE } from '../shared/routes';
import '../public/app.global.css'

const App = () => (
  <div>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <Nav />
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
