import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import question5 from '../components/questions/question5';
import question1 from '../components/questions/question1';
import question2 from '../components/questions/question2';
import question3 from '../components/questions/question3';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import question4 from '../components/questions/question4';
import AllChallanges from '../components/AllChallanges';
import chooseMode from '../components/chooseMode';
export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Route render={({location})=>(<TransitionGroup>
        <CSSTransition
        key={location.key}
        timeout={200}
        classNames="fade">

        
      <Switch location={location}>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path='/question5' component={question5}/>
        <Route path='/question1' component={question1}/>
        <Route path='/question2' component={question2}/>
        <Route path='/question3' component={question3}/>
        <Route path='/question4' component={question4}/>
        <Route path='/allChallenges' component={AllChallanges}/>
        <Route path='/chooseMode' component={chooseMode}/>
        <Route component={NotFoundPage} />
      </Switch>
      </CSSTransition>
      </TransitionGroup>)}/>
      
    </div>
  </Router>
);

export default AppRouter;
