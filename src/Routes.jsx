import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './views/Dashboard';
import Account from './views/Account';
import Settings from './views/Settings';
import SignIn from './views/SignIn';
import Register from './views/Register'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/sign-in"/>
        <Route component={Dashboard} exact path="/dashboard"/>
        <Route component={Account} exact path="/account"/>
        <Route component={Settings} exact path="/settings"/>
        <Route component={SignIn} exact path="/sign-in"/>
        <Route component={Register} exact path="/register"/>
      </Switch>
    );
  }
}
