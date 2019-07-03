import React from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Schedule/modal';
import Footer from '../Footer/Footer';
import AllStates from '../Membership/states';
import Upcoming from './upcoming';

const ProfilePage = styled.div`
    min-height: 82vh;
    position: absolute;
    z-index: -1;
    
    h1 {
        font-size: 50px;
    }
    .top-bgimg {
        background-image: url('imgs/profile.jpg');
        position: relative;
        opacity: 0.65;
        background-attachment: fixed;
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;
        height: 50vh;
        display: flex;
        justify-content: space-between;
        padding: 3vh 3vw 3vh 5vw;
    }
    .top-bgimg > div {
        align-self: flex-end;
    }
    .profile-header {
        color: white;
        font-family: 'Open Sans', sans-serif;
    }
    .player-info {
        border: 3px solid white;
        display: flex;
        height: 15vh;
        width: 30vw;
        padding: 15px;
        justify-content: center;
        margin: 15px 0 0 0;
    }
    .joined > span {
        font-size: 18px;
        font-weight: 600;
    } 
    .earnings > span {
        font-size: 16px;
        font-weight: 600;
    }
    .joined > p , .earnings > p {
        font-size: 24px;
        font-weight: 700;
    }
    .joined {
        border-right: 4px solid white;
    }
    .earnings, .joined {
        text-align: center;
        padding: 0 5vw;
    }
    .profile-pic {
        color: white;
        font-size: 200px;
        margin: 60px;
    }
    .edit-btn {
        font-size: 28px;
        border-radius: 4px;
        border: 2px solid white;
        width: 7vw;
        height: 6vh;
        font-family: 'Open Sans', sans-serif;  
        color: #ffffff;
        font-weight: 600;
        background-color: transparent;
    }
    .edit-btn:hover {
        background-color: #ffffff;
        color: #777;
    }
        
    .entire-table {
        background-attachment: fixed;
    }
    .table {
        width: 85vw;
        background-color: rgb(230, 233, 235);
    }
    /* header row */
    .head-row {
        height: 50px;
        background-color: #1e204b;
    }
    th {
        border: 2px solid #1e204b;
        color: #ffffff;
        font-family: 'Maven Pro', sans-serif;
    }
    /* tournament rows */
    .tour-row {
        background-color: #ffffff;
    }
    td > div {
        color: #1e204b;
        font-family: 'Open Sans', sans-serif;
    }
    .event, .date, .purse {
        text-align: center;
    }
    .add-info {
        padding: 5px 8px;
        display: flex;
        justify-content: space-between
        > div > button {
            color: blue;
            background-color: transparent;
            border: none;
            border-bottom: 1px solid blue;
        }
    }
    label {
        font-size: 13px
    }
    input {
        font-size: 13px;
        border-radius: 5px;
        margin: 6px 3px;
        text-align: center;
    }
    .event > input {
        width: 40px;
        text-align: inherit;
    }
    .tour-info-input {
        padding: 10px;
    }
    .tour-info {
        padding: 10px;
    }
    .city-input {
        width: 120px;
    }
    .state-input {
        width: 45px;
    }
    .purse > input {
        width: 80px;
    }
    .upcoming {
        margin: 25px;
        font-family: 'Maven Pro', sans-serif;
        font-size: 50px;
        color: #33357d;
    }

`

export default class PlayerProfile extends React.Component {
    state = {
        upcomingTours: [],
        editProfileModal: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        hometown: '',
        state: '',
        member: false,
        status: '',
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    getRegisteredTours = async()=>{
        try {
            const data = await fetch('/tour/upcoming', {
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedData = await data.json();
            return parsedData
        } catch (error) {
            console.log(error)
        }
    }
    componentDidMount(){
        this.getRegisteredTours().then((data)=>{
            this.setState({
                upcomingTours: data.allTours
            })
        })
    }
    showModal = (e)=>{
        this.setState({
            [e.target.name]: true
        })    
    }
    hideModal = (e)=>{
        this.setState({
            [e.target.name]: false
        })    
    }
    editProfile = async()=>{
        try {
            const data = await fetch(`/users/${this.props.user._id}`, {
                method: "PUT",
                credentials: 'include',
                body: JSON.stringify(this.state),
                headers: {
                    "Content-Type":"application/json"
                }
            })
            const parsedData = await data.json();
            this.props.updateCurrentUser(parsedData.user)
            this.setState({
                editProfileModal: false
            })
        } catch (error) {
            console.log(error)
        }
    }
    render(){
        const {user, logged} = this.props
        const {editProfileModal, firstName, lastName, email, hometown, state, member, upcomingTours}= this.state
        return(
            !logged
            ? <Redirect to="/"/>
            : <>
            <ProfilePage>
                <div className='top-bgimg'>
                    <div className='profile-header'>
                        <h1>{`${user.firstName} ${user.lastName}`}</h1>
                        <h3>Hometown: {`${user.hometown}, ${user.state}`}</h3>
                        <h4>{user.status === 'professional' ? '(PRO)' : '(AM)'} | {user.member && 'Member'}</h4>
                        <div className='player-info'>
                            <div className='joined'>
                                <span>Joined</span>
                                <p>{new Date(user.joined).getFullYear()}</p>
                            </div>
                            <div className="earnings">
                                <span>Career<br/>Earnings</span>
                                <p>${user.earnings}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faUserCircle} className="profile-pic" />
                        <button className="edit-btn" name="editProfileModal" onClick={this.showModal}>Edit</button>
                    </div>
                </div>
                <div className='upcoming-tour'>
                    <h2 className="upcoming">Upcoming Tournaments</h2>
                        <div className='entire-table'>
                            <table className='table'>
                                <thead className="table-head">
                                    <tr className= "head-row">
                                        <th>EVENT #</th>
                                        <th>DATE</th>
                                        <th>TOURNAMENT</th>
                                        <th>PURSE</th>
                                        <th>ADDITIONAL<br/>INFO</th>
                                    </tr>
                                </thead>
                                <tbody className="table-body">
                                    <Upcoming upcomingTours={upcomingTours} user={user} logged={logged} />
                                </tbody>
                            </table>
                        </div>
                </div>
                <div className='upcoming'>
                    <h2>Results</h2>
                </div>
                <Footer />
            </ProfilePage>
            <Modal show={editProfileModal}>
                <button name="editProfileModal" className="exit-btn" onClick={this.hideModal}>X</button>
                <h1>Edit Profile</h1>
                <form>
                    <p>Login Information</p>
                    <input type='text' name='email' placeholder={user.email} value={email} onChange={this.handleChange} />
                    <input type='password' name='password' placeholder='new password' onChange={this.handleChange} />
                    <p>Player Information</p>
                    <input type='text' name='firstName' placeholder={user.firstName} value={firstName} onChange={this.handleChange} />
                    <input type='text' name='lastName' placeholder={user.lastName} value={lastName} onChange={this.handleChange} />
                    <div className="hometown-state">
                        <input type='text' name='hometown' placeholder={user.hometown} value={hometown} onChange={this.handleChange} />
                        <input className="state-input" list='states' name='state' placeholder={user.state} value={state} onChange={this.handleChange} />
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
                <button className="edit-btn" onClick={this.editProfile}>Save Changes</button>
            </Modal>
            </>
        )
    }
}
