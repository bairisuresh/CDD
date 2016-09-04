import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Import miscellaneous routes and other requirements
import App from './containers/app';
import NotFoundPage from './components/pages/not-found-page';

// Import static pages
import HomePage from './components/pages/home-page';

// Import authentication related pages
import Register from './containers/auth/register';
import Login from './containers/auth/login';
import Logout from './containers/auth/logout';

// Import dashboard pages
import Dashboard from './containers/dashboard/dashboard';
// Import higher order containers
import RequireAuth from './containers/auth/require_auth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="register" component={Register} />
    <Route path="login" component={Login} />
    <Route path="logout" component={Logout} />
    <Route path="dashboard">
      <IndexRoute component={RequireAuth(Dashboard)} />
    </Route>

    <Route path="*" component={NotFoundPage} />
  </Route>
);
