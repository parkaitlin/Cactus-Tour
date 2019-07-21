import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from '../modal';
import Footer from '../Footer/Footer';
import AllStates from '../Membership/states';
import Upcoming from './upcoming';
import { ProfilePage, EditButton } from '../../styles/ProfilePage';
import { Exit } from '../../styles/Buttons'
;import useForm from '../useForm';

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
            const data = await fetch(`/${currentUser._id}/upcoming`, {
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedData = await data.json();
            console.log(parsedData);
            // setUpcomingTours(parsedData.allTours);
        }
        getUpcomingTours();
    }, [currentUser, editProfileModal]);

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
                                <Upcoming upcomingTours={upcomingTours} user={currentUser} logged={logged} />
                            </tbody>
                        </table>
                    </div>
            </div>
            <div className='upcoming'>
                {/* <h2>Results</h2> */}
            </div>
            <Footer />
        </ProfilePage>
        <Modal show={editProfileModal}>
            <Exit onClick={() => setEditProfileModal(false)}>X</Exit>
            <h1>Edit Profile</h1>
            <form onSubmit={handleSubmit}>
                <p>Login Information</p>
                <input type='text' name='email' placeholder={currentUser.email} value={values.email} onChange={handleChange} />
                <input type='password' name='password' placeholder='new password' onChange={handleChange} />
                <p>Player Information</p>
                <input type='text' name='firstName' placeholder={currentUser.firstName} value={values.firstName} onChange={handleChange} />
                <input type='text' name='lastName' placeholder={currentUser.lastName} value={values.lastName} onChange={handleChange} />
                <div className="hometown-state">
                    <input type='text' name='hometown' placeholder={currentUser.hometown} value={values.hometown} onChange={handleChange} />
                    <input className="state-input" list='states' name='state' placeholder={currentUser.state} value={values.state} onChange={handleChange} />
                        <AllStates />
                </div>
                    <label>Status: </label>
                <div className="pro-am">
                    Professional <input type="radio" name='status' value="professional" onChange={handleChange}/>
                    Amateur <input type="radio" name='status' value="amateur" onChange={handleChange}/>
                </div>
                <p>Membership</p>                    
                <select name='member' onChange={handleChange}>
                    <option value='false'>No Membership</option>
                    <option value='true'>Annual Membership ($412.00)</option>
                </select>
                {
                    currentUser.member === "true"
                    && <div className="payment-options">
                        <label>Pay By </label>
                        <button>via PayPal</button> 
                        <label>  or  </label>
                        <button>Check</button>
                    </div>
                }
                <button type="submit" className="edit-btn">Save Changes</button>
            </form>
        </Modal>
        </>
    )
}


export default PlayerProfile;