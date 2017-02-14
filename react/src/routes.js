import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import LogsIndexContainer from './containers/LogsIndexContainer';
import LogShowContainer from './containers/LogShowContainer';

let routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={LogsIndexContainer} />
    <Route path="logs/:id" component={LogShowContainer} />
  </Route>
);

export default routes;
