import React, { useState, useEffect } from 'react';
import AllStates from '../Membership/states';
import Tournaments from './tournaments';
import Modal from '../modal';
import { ScheduleTable } from '../../styles/SchedulePage';
import { Exit, CancelButton, SaveButton, SmallButton } from '../../styles/Buttons';
import useForm from '../useForm';


const Schedule = ({ props: { logged, setLogged, currentUser, setCurrentUser, setMessage } }) => {
    const [showPlayerList, setShowPlayerList] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [tours, setTours] = useState([]);
    const [selectedTour, setSelectedTour] = useState({});
    const [eventId, setEventId] = useState(0);
    const [eventNum, setEventNum] = useState(0);

    const eventActions = async () => {
        try {
            const inputs = {
                eventStartDate: values.eventStartDate,
                eventEndDate: values.eventEndDate,
                venue: values.venue,
                city: values.city,
                state: values.state,
                purse: values.purse,
                startTime: values.startTime,
                notes: values.notes,
                status: values.status
            }
            if(showEditModal){
                await fetch(`/tour/${selectedTour._id}`, {
                    method: "PUT",
                    credentials: "include",
                    body: JSON.stringify(inputs),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                setShowEditModal(false);
            } else {
                await fetch('/tour/new', {
                    method: "POST",
                    credentials: "include",
                    body: JSON.stringify(inputs),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                window.location.reload();
            }
        } catch (error) {
            throw new Error(error);
        }
    }
    
    const playerRegistration = async(index)=>{
        const data = await fetch(`/tour/registration/${index}`, {
            credentials: 'include',
            headers:{
                "Content-Type": "application/json"
            }
        });
        const parsedData = await data.json();
        setSelectedTour(tours.filter(tour => tour._id === index));
        
        setMessage(parsedData.message);
        sessionStorage.setItem('currentUser', JSON.stringify(parsedData.user));
    }

    const {values, setValues, handleChange, handleSubmit } = useForm(eventActions);
    
    useEffect(() => {
        const getTours = async () => {
            const data = await fetch('/tour/all', {
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const parsedData = await data.json();
            setTours(parsedData.tours);
            setEventId(parsedData.tours.length + 1);
            setLogged(sessionStorage.getItem('logged'));
            setCurrentUser(JSON.parse(sessionStorage.getItem('currentUser')));
        }

        getTours();
    }, [values, showEditModal, selectedTour, setCurrentUser, setLogged]);

    return(
        <>
        <ScheduleTable>
                {
                    !currentUser
                    ? <></>
                    : currentUser.admin 
                    && <>
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
                                <tr className="tour-row">
                                    <td className='event'>
                                        <input 
                                            type='number' 
                                            name='eventId' 
                                            value={eventId} 
                                            readOnly
                                        />
                                    </td>
                                    <td className='date'>
                                        <label>Start Date: </label>
                                        <input 
                                            type='date' 
                                            name='eventStartDate' 
                                            onChange={handleChange} 
                                        />
                                        <br/>
                                        <label>End Date: </label>                                        
                                        <input 
                                            type='date' 
                                            name='eventEndDate' 
                                            onChange={handleChange} 
                                        />
                                    </td>
                                    <td className='tour-info-input'>
                                        <label>Venue:</label>
                                        <input 
                                            type='text' 
                                            name='venue' 
                                            onChange={handleChange} 
                                        />
                                        <br/>
                                        <label>City:</label>                                        
                                        <input 
                                            className='city-input' 
                                            type='text' 
                                            name='city' 
                                            onChange={handleChange} 
                                        />
                                        <label>State:</label>                                        
                                        <input 
                                            className='state-input' 
                                            list='states' 
                                            name='state' 
                                            onChange={handleChange} 
                                        />
                                            <AllStates />
                                    </td>
                                    <td className='purse'>
                                        <label>$</label> <input 
                                                            type='text' 
                                                            name='purse' 
                                                            placeholder='ex) 9,000' 
                                                            onChange={handleChange} 
                                                        />
                                        <br/>
                                    </td>                                
                                    <td className='new-add-info'>
                                        <label>First Start Time: </label>
                                        <input 
                                            type='time' 
                                            name='startTime' 
                                            onChange={handleChange} 
                                        />
                                        <br/>
                                        <label>Player Notes: </label><br/>
                                        <input 
                                            type='text' 
                                            name='notes' 
                                            onChange={handleChange} 
                                        />
                                        <br/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <SmallButton onClick={handleSubmit}>Add Tournament</SmallButton></>
                }
                <h2 className="title-year">2019 Schedule</h2>
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
                            <Tournaments 
                                tours={tours} 
                                selectedTour={selectedTour}
                                setSelectedTour={setSelectedTour}
                                setShowEditModal={setShowEditModal} 
                                setShowPlayerList={setShowPlayerList}
                                setEventNum={setEventNum}
                                currentUser={currentUser} 
                                setCurrentUser={setCurrentUser}
                                logged={logged} 
                                setValues={setValues}
                                playerRegistration={playerRegistration}
                                // setMessage={setMessage}
                            />
                        </tbody>
                    </table>
                </div>
        </ScheduleTable>
        <Modal show={showPlayerList}>
            <Exit onClick={() => {setShowPlayerList(false)}}>X</Exit>
            <h1>Registered Players</h1>
            <div className='player-table'>
                <table className='table'>
                    <thead className="table-head">
                        <tr className= "head-row">
                            <th>Player</th>
                            <th>Hometown</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        <tr className="tour-row">
                            <td className='player-name'>
                                <div>Kaitlin Park</div>
                            </td>
                            <td className='player-hometown'>
                                <div>Tustin, CA</div>
                            </td>
                        </tr>
                        {
                            showPlayerList
                            && selectedTour.registeredPlayers.map((player)=>{
                                return(
                                <tr className="tour-row" key={player._id}>
                                    <td className='player-name'>
                                        <div>{`${player.firstName} ${player.lastName}`}</div>
                                    </td>
                                    <td className='player-hometown'>
                                        <div>{`${player.hometown}, ${player.state}`}</div>
                                    </td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>    
        </Modal>
        <Modal show={showEditModal}>
            <Exit onClick={() => {setShowEditModal(false); setValues({});}}>X</Exit>
            <h1>Edit Tournament</h1>
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
                            <tr className="tour-row">
                                <td className='event'>
                                    <div>{eventNum}</div>
                                </td>
                                <td className='date'>
                                    <label>Start Date: </label>
                                    <input 
                                        type='date' 
                                        name='eventStartDate' 
                                        value={values.eventStartDate} 
                                        onChange={handleChange} 
                                    />
                                    <br/>
                                    <label>End Date: </label>                                        
                                    <input 
                                        type='date' 
                                        name='eventEndDate' 
                                        value={values.eventEndDate} 
                                        onChange={handleChange} 
                                    />
                                </td>
                                <td className='tour-info'>
                                    <label>Venue:</label>
                                    <input 
                                        type='text' 
                                        name='venue' 
                                        value={values.venue} 
                                        onChange={handleChange} 
                                    />
                                    <br/>
                                    <label>City:</label>                                        
                                    <input 
                                        className='city-input' 
                                        type='text' 
                                        name='city' 
                                        value={values.city} 
                                        onChange={handleChange} 
                                    />
                                    <label>State:</label>                                        
                                    <input 
                                        className='state-input' 
                                        list='states' 
                                        name='state' 
                                        value={values.state} 
                                        onChange={handleChange} 
                                    />
                                        <AllStates />
                                </td>
                                <td className='purse'>
                                    <label>$</label> 
                                    <input 
                                        type='text' 
                                        name='purse' 
                                        value={values.purse} 
                                        onChange={handleChange} 
                                    />
                                    <br/>
                                </td>                                
                                <td className='add-info'>
                                    <div>
                                        <label>First Start Time: </label>
                                        <input 
                                            type='time' 
                                            name='startTime' 
                                            value={values.startTime} 
                                            onChange={handleChange} 
                                        />
                                        <br/>
                                        <label>Player Notes: </label><br/>
                                        <input 
                                            type='text' 
                                            name='notes' 
                                            value={values.notes} 
                                            onChange={handleChange} 
                                        />
                                        <br/>
                                        {
                                            !selectedTour.status 
                                            && <><label>Set Event Status to Active</label>
                                            <input 
                                                type='checkbox' 
                                                name='status' 
                                                value={true} 
                                                onChange={() => setValues({ ...values, status: true, notes: ''})} 
                                            /></>
                                        }
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <SaveButton onClick={handleSubmit}>Save Changes</SaveButton>
                {
                    values.status 
                    && <CancelButton className='cancel-btn' onClick={() => setValues( {...values, status: false, notes: "CANCELLED"} )}>Cancel Event</CancelButton>
                }
        </Modal>
        </>
    )
}

export default Schedule;
