import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Beauty from "./components/Beauty";
import Home from './components/Home'
const Routes = () => {

  const isLoggedIn = false

  return (
    <Switch>
      {/* Routes placed here are available to all visitors */}
      <Route path='/aboutMe' component={AboutMe} />
      <Route exact path='/tiana-fe/' component={Home} />
      <Route path="/beauty" component={Beauty} />
      {isLoggedIn && (
        <Switch>
          {/* Routes placed here are only available after logging in */}
        </Switch>
      )}
    </Switch>
  )
}

export default Routes;
