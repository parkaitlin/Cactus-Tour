import React, { useState } from 'react';
import AllStates from './states';
import useForm from '../useForm';
import { NewUserForm, LoginBox } from '../../styles/MemberPage';

const Member = ({ props: { history, setLogged, existingUser, setExistingUser, setCurrentUser} }) => {
    const [message, setMessage] = useState("");

    const authenticate = async ()=>{
        try {
            if(existingUser){
                const inputs = {
                    email: values.email,
                    password: values.password
                };
                const data = await fetch('/auth/login', {
                    method: "POST",
                    credentials: "include",
                    body: JSON.stringify(inputs),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const parsedData = await data.json();
                if(parsedData.verified === true){
                    setLogged(true);
                    setCurrentUser(parsedData.user)
                    history.push('/');
                } else {
                    setMessage(parsedData.message);
                }
            } else {
                const inputs = {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    password: values.password,
                    confirmPassword: values.confirmPassword,
                    hometown: values.hometown,
                    state: values.state,
                    member: values.member,
                    status: values.status,
                };
                const data = await fetch('/auth/new', {
                    method: "POST",
                    credentials: "include",
                    body: JSON.stringify(inputs),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const parsedData = await data.json();
                if(parsedData.created === true){
                    setLogged(true);
                    setCurrentUser(parsedData.user);
                    history.push('/');
                }
            }
        } catch (error) {
            throw new Error(error);
        }  
    }
    
    const { handleChange, handleSubmit, values } = useForm(authenticate);

    return(
        <div>
            {
                existingUser
                ? <LoginBox>
                    <div className='login-box'>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type='text' 
                                name='email' 
                                placeholder='email' 
                                value={values.email} 
                                onChange={handleChange} 
                            />
                            <br/>
                            <input 
                                type='password' 
                                name='password' 
                                placeholder='password' 
                                value={values.password} 
                                onChange={handleChange} 
                            />
                            <button type="submit">Login</button>
                        </form>
                        <p>Don't have an account? <span onClick={() => setExistingUser(false)}>Create an account here.</span></p>
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
                        <p>Already have an account? <span onClick={() => setExistingUser(true)}>Login here.</span></p>
                        <form onSubmit={handleSubmit}>
                            <p>Login Information</p>
                            <input 
                                type='text' 
                                name='email' 
                                placeholder='email' 
                                value={values.email} 
                                onChange={handleChange} 
                            />
                            <input 
                                type='password' 
                                name='password' 
                                placeholder='password' 
                                value={values.password} 
                                onChange={handleChange} 
                            />
                            <input 
                                type='password' 
                                name='confirmPassword' 
                                placeholder='confirm password' 
                                value={values.confirmPassword} 
                                onChange={handleChange} 
                            />
                            <p>Player Information</p>
                            <input 
                                type='text' 
                                name='firstName' 
                                placeholder='first name' 
                                value={values.firstName} 
                                onChange={handleChange} 
                            />
                            <input 
                                type='text' 
                                name='lastName' 
                                placeholder='last name' 
                                value={values.lastName} 
                                onChange={handleChange} 
                            />
                            <div className="hometown-state">
                                <input 
                                    type='text' 
                                    name='hometown' 
                                    placeholder='hometown' 
                                    value={values.hometown} 
                                    onChange={handleChange} 
                                    />
                                <input 
                                    className="state-input" 
                                    list='states' 
                                    name='state' 
                                    placeholder='state' 
                                    value={values.state} 
                                    onChange={handleChange} 
                                />
                                    <AllStates />
                            </div>
                                <label>Status: </label>
                            <div className="pro-am">
                                Professional <input 
                                                type="radio" 
                                                name='status' 
                                                value="professional" 
                                                onChange={handleChange}
                                            />
                                Amateur     <input 
                                                type="radio" 
                                                name='status' 
                                                value="amateur" 
                                                onChange={handleChange}
                                            />
                            </div>
                            <p>Membership</p>                    
                            <select name='member' onChange={handleChange}>
                                <option value='false'>No Membership</option>
                                <option value='true'>Annual Membership ($412.00)</option>
                            </select>
                            {
                                values.member === "true"
                                && <div className="payment-options">
                                    <label>Pay By </label>
                                    <button>via PayPal</button> 
                                    <label>  or  </label>
                                    <button>Check</button>
                                </div>
                            }
                            <button className="submit-btn" type="submit">Submit</button>
                        </form>
                    </div>  
                </NewUserForm>
            }
        </div>
    )
}

export default Member;
