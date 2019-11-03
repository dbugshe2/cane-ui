import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './views/Dashboard';
import Account from './views/Account';
import Cane from './views/Cane';
import Help from './views/Help';
import CaneHistory from './views/CaneHistory';
import SignIn from './views/SignIn';
import Register from './views/Register'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/sign-in"/>
        <Route component={Dashboard} exact path="/dashboard"/>
        <Route component={Cane} exact path="/cane"/>
        <Route component={Account} exact path="/account"/>
        <Route component={Help} exact path="/help"/>
        <Route component={CaneHistory} exact path="/history"/>
        <Route component={SignIn} exact path="/sign-in"/>
        <Route component={Register} exact path="/register"/>
      </Switch>
    );
  }
}
