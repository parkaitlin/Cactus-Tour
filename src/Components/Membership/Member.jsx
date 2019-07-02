import React from 'react';
import styled from 'styled-components';
import AllStates from './states';

const NewUserForm = styled.div`
    display:flex;
    max-height: 83vh;
    padding: 20px;

    span {
        color: #84dcac;
        text-decoration: underline;
    }
    .member-fees, .new-member-form {
        flex: 1;
        margin: 15px;
    }
    .member-fees {
        padding: 10px;
        display: flex;
        flex-direction: column;
    }
    .price {
        display: flex;
        justify-content: space-evenly;
        margin: 5px;
    }
    .col-1 > h3 {
        margin-top: 10px;
    }
    .col-1 > h4 {
        margin: 10px 0;
    }
    .col-2 > p, .col-3 > p {
        text-decoration: underline;
        margin: 5px;
    } 
    .col-2, .col-3 {
        text-align: center;
    }
    .compare-prices {
        margin-top: 35px;
    }
    .notes {
        padding: 10px;
        text-align: justify;
        font-size: 12px;
    }
    .new-member-form {
        border-left: 2px solid #84dcac;
        padding: 15px;
        overflow-y: auto;
        overflow-x: hidden;
    }
    form > p {
        margin: 15px 0;
    }
    button {
        border-radius: 4px;
        font-size: 20px;
        color: white;
        background-color: #777;
        width: 10vw;
        margin: 20px 0;
    }
    .submit-btn {
        margin-left: 17vw;
        margin-right: 17vw;
    }
    form{
        display: flex;
        flex-direction: column;
    }
    input {
        font-size: 20px;
        margin: 10px 0;
        border: none;
        border-bottom: 1px solid #777;
        color: #777;
        text-align: center;
    }
    .hometown-state, .pro-am {
        display: flex;
        justify-content: center;
        margin: 10px 0;
    }
    .hometown-state > input, .pro-am > input {
        margin: 0 10px;

    }
    .state-input {
        width: 80px;
    }

`

const LoginBox = styled.div`
    /* height: 64vh; */
    display: flex;
    justify-content: center;
    align-items: center;

    .login-box {
        border-left: 2px solid black;
        border-right: 2px solid black;
        height: 28em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 30px;
    }
    form{
        display: flex;
        flex-direction: column;
    }
    input {
        font-size: 20px;
        margin: 10px 0;
        border: none;
        border-bottom: 1px solid #777;
        color: #777;
        text-align: center;
    }
    span {
        color: #84dcac;
        text-decoration: underline;
    }
    button {
        border-radius: 4px;
        font-size: 20px;
        color: white;
        background-color: #777;
        margin: 20px 0;
    }
    
`

export default class Member extends React.Component {
    state = {
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
        const {firstName, lastName, email, password, hometown, state, member, confirmPassword} = this.state
        const {existingUser} = this.props
        return(
            <div>
                {
                    existingUser
                    ? <LoginBox>
                        <div className='login-box'>
                            <form>
                                {/* <label>Email: </label> */}
                                <input type='text' name='email' placeholder='email' value={email} onChange={this.handleChange} /><br/>
                                {/* <label>Password: </label>                     */}
                                <input type='password' name='password' placeholder='password' value={password} onChange={this.handleChange} />
                            </form>
                            <button onClick={this.handleLogin}>Login</button>
                            <p>Don't have an account? <span onClick={this.props.showNewUserForm}>Create an account here.</span></p>
                        </div>
                    </LoginBox>
                    : <NewUserForm>
                        <div className="member-fees">
                            <h2>Membership & Entry Fees</h2>
                            <div className="price">
                                <div className="col-1">
                                    <br/>
                                    <h3>Annual Membership:</h3>
                                    <h4>Member Event Entry:</h4>
                                    <h5>Professional</h5>
                                    <h5>Amateur</h5>
                                    <h4>Non-Member Event Entry:</h4>
                                    <h5>Professional</h5>
                                    <h5>Amateur</h5>
                                </div>
                                <div className="col-2">
                                    <p>Cash or Check</p>
                                    <h3>$399</h3>
                                    <div className="compare-prices">
                                        <h5>$560</h5>
                                        <h5>$200</h5>
                                        <br/>
                                        <br/>
                                        <h5>$660</h5>
                                        <h5>$275</h5>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <p>via PayPal</p>
                                    <h3>$412</h3>
                                    <div className="compare-prices">
                                        <h5>$577</h5>
                                        <h5>$206</h5>
                                        <br/>
                                        <br/>
                                        <h5>$680</h5>
                                        <h5>$285</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="notes">
                                <span>Notes</span><br/><p>Field size is limited to 72 players. Entry fees are used strictly for prize money and course usage fees. Course usage fees include: greens fee, shared cart and range balls before and after the round. Course usage fees range from $90 to $210 per event for each entrant. Once the non-member fee has been used on five (5) event entries, the player will then only pay the member entry fee rate.</p>
                            </div>
                        </div>
                        <div className="new-member-form">
                            <h3>Create a New Account</h3>
                            <p>Already have an account? <span onClick={this.props.showLogin}>Login here.</span></p>
                            <form>
                                <p>Login Information</p>
                                <input type='text' name='email' placeholder='email' value={email} onChange={this.handleChange} />
                                <input type='password' name='password' placeholder='password' value={password} onChange={this.handleChange} />
                                <input type='password' name='confirmPassword' placeholder='confirm password' value={confirmPassword} onChange={this.handleChange} />
                                <p>Player Information</p>
                                <input type='text' name='firstName' placeholder='first name' value={firstName} onChange={this.handleChange} />
                                <input type='text' name='lastName' placeholder='last name' value={lastName} onChange={this.handleChange} />
                                <div className="hometown-state">
                                    <input type='text' name='hometown' placeholder='hometown' value={hometown} onChange={this.handleChange} />
                                    <input className="state-input" list='states' name='state' placeholder='state' value={state} onChange={this.handleChange} />
                                        <AllStates />
                                </div>
                                    <label>Status: </label>
                                <div className="pro-am">
                                    Professional <input type="radio" name='status' value="professional" onChange={this.handleChange}/>
                                    Amateur <input type="radio" name='status' value="amateur" onChange={this.handleChange}/>
                                </div>
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
                                    <button>via PayPal</button> 
                                    <label>  or  </label>
                                    <button>Check</button>
                                </div>
                            }
                            <button className="submit-btn" onClick={this.handleNewForm}>Submit</button>
                        </div>  
                    </NewUserForm>
                }
            </div>
        )
    }
}
