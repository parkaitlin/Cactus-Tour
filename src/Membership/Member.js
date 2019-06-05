import React, {Component} from 'react'

import AllStates from './states'

class Member extends Component {
    state = {
        member: true,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        hometown: '',
        state: '',
        membership: ''
    }
    showLogin = ()=>{
        this.setState({
            member: true
        })
    }
    showNewMemberForm = ()=>{
        this.setState({
            member: false
        })
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    newMember = (e)=>{
        e.preventDefault();
    }
    login = (e)=>{
        e.preventDefault();
    }
    render(){
        const {member, firstName, lastName, email, password, hometown, state, membership} = this.state
        return(
            member
            ? <div className="login-form">
                <p>Not A Member? <button onClick={this.showNewMemberForm}>Become a Member here.</button></p>
                <form>
                    <label>Email</label>
                    <input type='text' name='email' value={email} onChange={this.handleChange} />
                    <label>Password</label>                    
                    <input type='password' name='password' value={password} onChange={this.handleChange} />

                </form>
            </div>
            : <div className="new-member-form">
                <p>Already A Member? <button onClick={this.showLogin}>Login here.</button></p>
                <form>
                    <p>Login Information</p>
                    <label>Email</label>
                    <input type='text' name='email' value={email} onChange={this.handleChange} />
                    <label>Password</label>                    
                    <input type='password' name='password' value={password} onChange={this.handleChange} />
                    <p>Player Information</p>
                    <label>First Name</label>                    
                    <input type='text' name='firstName' value={firstName} onChange={this.handleChange} />
                    <label>Last Name</label>                    
                    <input type='text' name='lastName' value={lastName} onChange={this.handleChange} />
                    <label>Hometown</label>                    
                    <input type='text' name='hometown' value={hometown} onChange={this.handleChange} />
                    <label>State</label>                    
                    <input list='states' name='state' value={state} onChange={this.handleChange} />
                        <AllStates />
                </form>
            </div>  
        )
    }
}