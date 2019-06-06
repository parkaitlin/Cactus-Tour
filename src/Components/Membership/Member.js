import React, {Component} from 'react'

import AllStates from './states'

class Member extends Component {
    state = {
        existingUser: true,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        hometown: '',
        state: '',
        member: false,
        status: '',
        confirmPassword: ''
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
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleNewForm = ()=>{
        this.props.newAccount(this.state)
    }
    handleLogin = (e)=>{
        e.preventDefault();
        this.props.login({email: this.state.email, password: this.state.password})
    }
    render(){
        const {existingUser, firstName, lastName, email, password, hometown, state, member, confirmPassword} = this.state
        return(
            existingUser
            ? <div className="login-form">
                <p>Don't have an account? <button onClick={this.showNewUserForm}>Create an account here.</button></p>
                <form>
                    <label>Email</label>
                    <input type='text' name='email' value={email} onChange={this.handleChange} /><br/>
                    <label>Password</label>                    
                    <input type='password' name='password' value={password} onChange={this.handleChange} />
                </form>
                <button onClick={this.handleLogin}>Login</button>
            </div>
            : <div className="container-new">
                <div className="member-fees">
                    <h3>Membership & Entry Fees</h3>
                    <div><p>Cash or Check</p><p>via PayPal</p></div>
                    <div><h5>Annual Membership:</h5><p>$399</p><p>$412</p></div>
                    <h5>Member Event Entry:</h5>
                    <div><h6>Professional</h6><p>$560</p><p>$577</p></div>
                    <div><h6>Amateur</h6><p>$200</p><p>$206</p></div>
                    <h5>Non-Member Event Entry:</h5>
                    <div><h6>Professional</h6><p>$660</p><p>$680</p></div>
                    <div><h6>Amateur</h6><p>$275</p><p>$285</p></div>
                    <p><span>Notes</span>Field size is limited to 72 players. Entry fees are used strictly for prize money and course usage fees. Course usage fees include: greens fee, shared cart and range balls before and after the round. Course usage fees range from $90 to $210 per event for each entrant. Once the non-member fee has been used on five (5) event entries, the player will then only pay the member entry fee rate.</p>
                </div>
                <div className="new-member-form">
                    <p>Already have an account? <button onClick={this.showLogin}>Login here.</button></p>
                    <form>
                        <p>Login Information</p>
                        <label>Email: </label>
                        <input type='text' name='email' value={email} onChange={this.handleChange} /><br/>
                        <label>Password: </label>                    
                        <input type='password' name='password' value={password} onChange={this.handleChange} />
                        <label>Confirm Password: </label>                    
                        <input type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} />
                        <p>Player Information</p>
                        <label>First Name: </label>                    
                        <input type='text' name='firstName' value={firstName} onChange={this.handleChange} /><br/>
                        <label>Last Name: </label>                    
                        <input type='text' name='lastName' value={lastName} onChange={this.handleChange} /><br/>
                        <label>Hometown: </label>                    
                        <input type='text' name='hometown' value={hometown} onChange={this.handleChange} />
                        <label>State: </label>                    
                        <input list='states' name='state' value={state} onChange={this.handleChange} />
                            <AllStates />
                        <br/><label>Status:</label><br/>
                        Professional <input type="radio" name='status' value="professional" onChange={this.handleChange}/>
                        Amateur <input type="radio" name='status' value="amateur" onChange={this.handleChange}/>
                        <p>Membership</p>                    
                        <select name='member' onChange={this.handleChange}>
                            <option value='false'>No Membership</option>
                            <option value='true'>Annual Membership ($412.00)</option>
                        </select>
                    </form>
                    {
                        member === "true"
                        && <div className="payment-options">
                            <label>Pay By </label>
                            <button>Credit Card</button> 
                            <label>or</label>
                            <button>Check</button>
                        </div>
                    }
                    <button onClick={this.handleNewForm}>Submit</button>
                </div>  
            </div>
        )
    }
}

export default Member;