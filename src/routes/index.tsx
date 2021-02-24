import React, { lazy } from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom';
import Game from 'src/pages/Game';
import NotFound from 'src/pages/NotFound';

interface MatchParams {
  game: string;
}

type MatchProps = RouteComponentProps<MatchParams>;

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
      <Route exact path="/home/:game" render={({ match }: MatchProps) => (<Game game={match.params.game} />)} />
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
