import React, {Component} from 'react';

import './App.css';
import styled from 'styled-components';

import * as routes from './constants/routes';
import {Switch, Route} from 'react-router-dom';

import Navbar from './Navbar/Navbar'




class App extends Component {
  state = {
    logged: false
  }
  render(){
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={routes.HOME} render={()=> <div>HOME PAGE</div>} />
          <Route exact path={routes.LOGIN} render={()=> <div>LOGIN PAGE</div>} />
          <Route exact path={routes.MEMBER} render={()=> <div>MEMBERSHIP REGISTRATION PAGE</div>} />
          <Route exact path={routes.SCHEDULE} render={()=> <div>SCHEDULE PAGE</div>} />
          <Route exact path={routes.MLIST} render={()=> <div>MONEY LIST PAGE</div>} />
          <Route exact path={routes.PAST} render={()=> <div>PAST RESULTS PAGE</div>} />
          <Route exact path={routes.POLICY} render={()=> <div>POLICIES PAGE</div>} />
          <Route exact path={routes.CONTACT} render={()=> <div>CONTACT US PAGE</div>} />
          <Route exact path={routes.ABOUT} render={()=> <div>ABOUT PAGE</div>} />          
        </Switch>

      </div>
    )
  }
}

export default App;
