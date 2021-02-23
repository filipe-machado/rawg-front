import React, { lazy } from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect,
} from 'react-router-dom';
import NotFound from 'src/pages/NotFound';

// PAGES
const Home = lazy(() => import('../pages/Home'));

const Routes = (): React.ReactElement => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/home/:game">
        <Home />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
