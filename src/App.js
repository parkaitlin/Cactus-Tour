import React, {Component} from 'react';

import './App.css';
import styled from 'styled-components';

import * as routes from './Components/constants/routes';
import {Switch, Route, withRouter} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Member from './Components/Membership/Member';
import Profile from './Components/Profile/Profile';
import Policies from './Components/Policies/Policies';
import Schedule from './Components/Schedule/Schedule';




class App extends Component {
  state = {
    logged: false,
    existingUser: false,
    currentUser: null,
    selectedTour: ''
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
        this.props.history.push('/');
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
        this.props.history.push('/');
      }
    } catch (error) {
      console.log(error)
    }
  }
  logout = async ()=>{
    const data = await fetch('/auth/logout', {
      method:"POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      logged: false,
      currentUser: null
    })
  }
  showLogin = ()=>{
    this.setState({
        existingUser: true
    })
  }
  showNewUserForm = ()=>{
    this.setState({
        existingUser: false
    })
  }
  selectedTour = ()=>{
    
  }
  render(){
    const {logged, existingUser, currentUser} = this.state
    return (
      <div className="App">
        <Navbar logged={logged} showLogin={this.showLogin} showNewUserForm={this.showNewUserForm} logout={this.logout} />
        <Switch>
          <Route exact path={routes.HOME} render={()=> <Home />} />
          {/* <Route exact path={routes.LOGIN} render={()=> <div>LOGIN PAGE</div>} /> */}
          <Route exact path={routes.MEMBER} render={()=> <Member newAccount={this.newAccount} login={this.login} existingUser={existingUser} showLogin={this.showLogin} showNewUserForm={this.showNewUserForm}/>} />
          <Route exact path={routes.SCHEDULE} render={()=> <Schedule />} />
          <Route exact path={routes.PROFILE} render={()=> <Profile />} />
          <Route exact path={routes.MLIST} render={()=> <div>MONEY LIST PAGE</div>} />
          <Route exact path={routes.PAST} render={()=> <div>PAST RESULTS PAGE</div>} />
          <Route exact path={routes.POLICY} render={()=> <Policies />} />
          <Route exact path={routes.CONTACT} render={()=> <div>CONTACT US PAGE</div>} />
          <Route exact path={routes.ABOUT} render={()=> <div>ABOUT PAGE</div>} />         
          <Route exact path={routes.PLIST} render={()=> <div>players LIST</div>} />          
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
