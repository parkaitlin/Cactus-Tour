import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from '../modal';
import Footer from '../Footer/Footer';
import AllStates from '../Membership/states';
import Upcoming from './upcoming';
import { ProfilePage, EditButton, EditForm } from '../../styles/ProfilePage';
import { SaveButton } from '../../styles/Buttons';
import { Exit } from '../../styles/Buttons'
;import useForm from '../useForm';

const PlayerProfile = ({props: { currentUser, setCurrentUser, setLogged, logged }}) => {
    const [editProfileModal, setEditProfileModal] = useState(false);
    const [upcomingTours, setUpcomingTours] = useState([]);

    const editProfile = async()=>{
        try {
            const inputs = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
                confirmPassword: values.confirmPassword,
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
            sessionStorage.setItem('currentUser', JSON.stringify(parsedData.user));
        } catch (error) {
            throw new Error(error);
        }
    }

    const { values, setValues, handleChange, handleSubmit } = useForm(editProfile);
    
    useEffect(() => {
        const getUpcomingTours = async () => {
            const data = await fetch('users/upcoming', {
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedData = await data.json();
            setUpcomingTours(parsedData.allTours);
            setLogged(sessionStorage.getItem('logged'));
            setCurrentUser(JSON.parse(sessionStorage.getItem('currentUser')));
        }
        const cleanup = () => {
            document.querySelector("form").reset();
        }
        getUpcomingTours();
        return cleanup();

    }, [editProfileModal, setCurrentUser, setLogged, setValues]);

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
                    <EditButton onClick={() => setEditProfileModal(true)}>Edit</EditButton>
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
                                <Upcoming 
                                    upcomingTours={upcomingTours} 
                                />
                            </tbody>
                        </table>
                    </div>
            </div>
            <div className='upcoming'>
                {/* <h2>Results</h2> */}
            </div>
        </ProfilePage>
        <Modal show={editProfileModal}>
            <Exit onClick={() => setEditProfileModal(false)}>X</Exit>
            <h1>Edit Profile</h1>
            <EditForm onSubmit={handleSubmit}>
                <p>Login Information</p>
                <label>Email</label>
                <input 
                    type='text' 
                    name='email' 
                    placeholder={currentUser.email} 
                    onChange={handleChange} 
                />    
                <label>Change Password</label>
                <input 
                    type='password' 
                    name='password' 
                    placeholder='New Password' 
                    onChange={handleChange} 
                />
                <label>Confirm New Password</label>
                <input 
                    type='password' 
                    name='confirmPassword' 
                    placeholder='Confirm Password' 
                    onChange={handleChange} 
                />

                <p>Player Information</p>
                <label>First Name</label>
                <input 
                    type='text' 
                    name='firstName' 
                    placeholder={currentUser.firstName} 
                    onChange={handleChange} 
                />
                <label>Last Name</label>
                <input 
                    type='text' 
                    name='lastName' 
                    placeholder={currentUser.lastName} 
                    onChange={handleChange} 
                />
                <label>Hometown</label>    
                <input 
                    type='text' 
                    name='hometown' 
                    placeholder={currentUser.hometown} 
                    onChange={handleChange} 
                />
                <label>State</label>    
                <input 
                    className="state-input" 
                    list='states' 
                    name='state' 
                    placeholder={currentUser.state} 
                    onChange={handleChange} 
                />
                    <AllStates />
                    <label>Status: </label>
                <div className="pro-am">
                    Professional <input 
                                    type="radio" 
                                    name='status' 
                                    value="professional" 
                                    onChange={handleChange}
                                />
                    Amateur <input 
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
                <SaveButton type="submit" onClick={() => setEditProfileModal(false)}>Save Changes</SaveButton>
            </EditForm>
        </Modal>
        </>
    )
}


export default PlayerProfile;