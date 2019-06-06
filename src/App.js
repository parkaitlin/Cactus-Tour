import React, {Component} from 'react';

import './App.css';
import styled from 'styled-components';

import * as routes from './Components/constants/routes';
import {Switch, Route} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Member from './Components/Membership/Member';





class App extends Component {
  state = {
    logged: false,
    currentUser: {}
  }
  newAccount = async (info)=>{
    try {
      const data = await fetch('/auth/new', {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(info),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const parsedData = await data.json();
      console.log(parsedData)
      if(parsedData.created === true){
        this.setState({
          logged: true,
          currentUser: parsedData.user
        })
      }

    } catch (error) {
      console.log(error)
    }  
  }
  login = async (info)=>{
    try {
      const data = await fetch('/auth/login', {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(info),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const parsedData = await data.json();
      console.log(parsedData)
      if(parsedData.verified === true){
        this.setState({
          logged: true,
          currentUser: parsedData.user
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  render(){
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={routes.HOME} render={()=> <Home />} />
          <Route exact path={routes.LOGIN} render={()=> <div>LOGIN PAGE</div>} />
          <Route exact path={routes.MEMBER} render={()=> <Member newAccount={this.newAccount} login={this.login}/>} />
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
