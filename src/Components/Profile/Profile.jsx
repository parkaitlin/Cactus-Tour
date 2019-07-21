import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Schedule/modal';
import Footer from '../Footer/Footer';
import AllStates from '../Membership/states';
import Upcoming from './upcoming';
import { ProfilePage } from '../../styles/ProfilePage';
import useForm from '../useForm';

const PlayerProfile = ({props: { currentUser, setCurrentUser, logged}}) => {
    const [editProfileModal, setEditProfileModal] = useState(false);
    const [upcomingTours, setUpcomingTours] = useState([]);

    const editProfile = async()=>{
        try {
            const inputs = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
                hometown: values.hometown,
                state: values.state,
                status: values.status,
                member: values.member
            }
            const data = await fetch(`/users/${currentUser._id}`, {
                method: "PUT",
                credentials: 'include',
                body: JSON.stringify(inputs),
                headers: {
                    "Content-Type":"application/json"
                }
            })
            const parsedData = await data.json();
            setCurrentUser(parsedData.user);
            setEditProfileModal(false);
        } catch (error) {
            throw new Error(error);
        }
    }

    const { values, setValues, handleChange, handleSubmit } = useForm(editProfile);
    
    useEffect(() => {
        console.log('useEffect');
        const getUpcomingTours = async () => {
            const data = await fetch('/tour/upcoming', {
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedData = await data.json();
            setUpcomingTours(parsedData.allTours);
        }
        getUpcomingTours();
    }, []);

    // componentDidMount(){
    //     this.getRegisteredTours().then((data)=>{
    //         this.setState({
    //             upcomingTours: data.allTours
    //         })
    //     })
    // }
    // showModal = (e)=>{
    //     this.setState({
    //         [e.target.name]: true
    //     })    
    // }
    // hideModal = (e)=>{
    //     this.setState({
    //         [e.target.name]: false
    //     })    
    // }
    return(
        !logged
        ? <Redirect to="/"/>
        : <>
        <ProfilePage>
            <div className='top-bgimg'>
                <div className='profile-header'>
                    <h1>{`${currentUser.firstName} ${currentUser.lastName}`}</h1>
                    <h3>Hometown: {`${currentUser.hometown}, ${currentUser.state}`}</h3>
                    <h4>{currentUser.status === 'professional' ? '(PRO)' : '(AM)'} | {currentUser.member && 'Member'}</h4>
                    <div className='player-info'>
                        <div className='joined'>
                            <span>Joined</span>
                            <p>{new Date(currentUser.joined).getFullYear()}</p>
                        </div>
                        <div className="earnings">
                            <span>Career<br/>Earnings</span>
                            <p>${currentUser.earnings}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <FontAwesomeIcon icon={faUserCircle} className="profile-pic" />
                    <button className="edit-btn" onClick={() => setEditProfileModal(true)}>Edit</button>
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


export default PlayerProfile;