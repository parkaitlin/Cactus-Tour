import React, { useState } from 'react';

import './App.css';

import * as routes from './Components/constants/routes';
import {Switch, Route, withRouter} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Member from './Components/Membership/Member';
import Profile from './Components/Profile/Profile';
import Policies from './Components/Policies/Policies';
import Schedule from './Components/Schedule/Schedule';
import Contact from './Components/Contact/Contact';


const App = props => {
  const [logged, setLogged] = useState(false);
  const [existingUser, setExistingUser] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <div className="App">
      <Navbar logged={logged} setExistingUser={setExistingUser} setLogged={setLogged} />
      <Switch>
        <Route 
          exact path={routes.HOME} 
          render={()=> <Home />} 
        />
        {/* <Route exact path={routes.LOGIN} render={()=> <div>LOGIN PAGE</div>} /> */}
        <Route 
          exact path={routes.MEMBER} 
          render={props => <Member props={{ ...props, setLogged, existingUser, setExistingUser, setCurrentUser}} />}
        />
        <Route 
          exact path={routes.SCHEDULE} 
          render={()=> <Schedule user={currentUser} logged={logged} updateCurrentUser={this.updateCurrentUser} />} 
        />
        <Route 
          exact path={routes.PROFILE} 
          render={()=> <Profile user={currentUser} updateCurrentUser={this.updateCurrentUser} logged={logged} />} 
        />
        <Route 
          exact path={routes.PAST} 
          render={()=> <div>PAST RESULTS PAGE</div>} 
        />
        <Route 
          exact path={routes.POLICY} 
          render={()=> <Policies />} 
        />
        <Route 
          exact path={routes.CONTACT} 
          render={()=> <Contact />} 
        />
        <Route 
          exact path={routes.ABOUT} 
          render={()=> <div>ABOUT PAGE</div>} 
        />         
        <Route 
          exact path={routes.LEADER} 
          render={()=> <div>LeaderBoard</div>} 
        />          
      </Switch>
    </div>
  )
}

  // logout = async ()=>{
  //   const data = await fetch('/auth/logout', {
  //     method:"POST",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //   const parsedData = data.json()
  //   this.setState({
  //     logged: false,
  //     currentUser: null
  //   })
  //   return parsedData
  // }
  // updateCurrentUser = (info)=>{
  //   this.setState({
  //     currentUser: info
  //   })
  // }


export default withRouter(App);
