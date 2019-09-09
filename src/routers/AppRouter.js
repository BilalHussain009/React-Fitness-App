import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import {CSSTransition,TransitionGroup} from 'react-transition-group';
import AllChallanges from '../components/AllChallanges';
import chooseMode from '../components/chooseMode';
import FirstTime from '../components/FirstTime';
export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      

        
      <Switch location={location}>

        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/firsttime" component={FirstTime}/>
        
        <Route path='/allChallenges' component={AllChallanges}/>
        <Route path='/chooseMode' component={chooseMode}/>
        <Route component={NotFoundPage} />
      </Switch>
     
      
    </div>
  </Router>
);

export default AppRouter;
