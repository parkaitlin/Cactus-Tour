import React from 'react';
import { handleDate, handleMonth, handleTime } from '../timeAndDate';

const TourSchedule = ({props: {tours, selectedTour, setSelectedTour, setShowEditModal, setShowPlayerList, setEventNum, currentUser, setCurrentUser, logged, setMessage}})=>{
    const playerList = (index) => {
        setShowPlayerList(true);
        setSelectedTour(tours[index]);
        setEventNum(index + 1);
    }
    const editModal = (index) => {
        setShowEditModal(true);
        setSelectedTour(tours[index]);
        setEventNum(index + 1);
    }
    const eventRegistration = async(index)=>{
        setSelectedTour(tours[index]);
        let registered = false;

        for(let i = 0; i < currentUser.registeredTours.length - 1; i++){
            if(selectedTour.registeredPlayers.length === 0 || currentUser.registeredTours.length === 0){
                registered = false
            } else if(selectedTour.registeredPlayers[i]._id === currentUser._id){
                registered = true;
                setMessage('You are already registered for the selected tournament');
            }
        }
        if(!registered){
            try {
            const data = await fetch(`/tour/registration/${this.state.selectedTour._id}`, {
                credentials: 'include',
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const parsedData = await data.json();
            setCurrentUser(parsedData.user)
            } catch (error) {
            console.log(error)
            } 
        }
    }
    const tournaments = tours.map((tour, i)=>{
        return(
            <tr className="tour-row" key={tour._id}>
                <td className='event'>
                    <div>{i + 1}</div>
                </td>
                <td className='date'>
                    <div>{handleMonth(tour.eventStartDate)}</div>
                    <div>{handleDate(tour.eventStartDate)} - {handleDate(tour.eventEndDate)}</div>
                </td>
                <td className='tour-info'>
                    <div>{tour.venue}</div>
                    <div>{`${tour.city}, ${tour.state}`}</div>
                </td>
                <td className='purse'>
                    <div>{`$${tour.purse}`}</div>
                </td>                                
                <td className='add-info'>
                    <div>
                        <div>First Start Time: {handleTime(tour.startTime)}</div>
                        <button name="showPlayerList" onClick={() => playerList(i)}>View Registered Players</button><br/>
                        {/* <Link to={routes.LEADER}>View Leaderboard</Link> */}
                        <div>Note to Players: <span className="notes-red">{tour.notes}</span></div>
                    </div>
                    {
                    !currentUser
                    ? <></>
                    : currentUser.admin
                    && <button name='showEditModal' className="tour-edit-btn" onClick={() => editModal(i)}>Edit</button>
                    }
                    {
                        logged && new Date(tour.eventStartDate) > new Date()
                        && <button className="tour-register-btn" onClick={() => eventRegistration(i)}>Register</button>
                    }                    
                </td>
            </tr>
        )
    })
    return(
        tournaments
    )
}

export default TourSchedule;