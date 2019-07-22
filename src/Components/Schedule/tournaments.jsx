import React from 'react';
import { handleDate, handleMonth, handleTime } from '../timeAndDate';
import { SmallButton } from '../../styles/Buttons';

const TourSchedule = ({tours, selectedTour, setSelectedTour, setShowEditModal, setShowPlayerList, setEventNum, currentUser, setCurrentUser, logged, setValues, playerRegistration, setMessage}) => {
    // const playerRegistration = async(index)=>{
    //     try {
    //         const data = await fetch(`/tour/registration/${tours[index]._id}`, {
    //             credentials: 'include',
    //             headers:{
    //                 "Content-Type": "application/json"
    //             }
    //         });
    //         const parsedData = await data.json();
    //         console.log(parsedData);
    //         setCurrentUser(parsedData.user);
    //     } catch (error) {
    //         throw new Error(error);
    //     } 
    // }

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
                        <button onClick={() => {
                            setShowPlayerList(true);
                            setSelectedTour(tours[i]);
                            setEventNum(i + 1);}}>
                            View Registered Players
                        </button>
                        <br/>
                        {/* <Link to={routes.LEADER}>View Leaderboard</Link> */}
                        <div>Note to Players: <span className="notes-red">{tour.notes}</span></div>
                    </div>
                    <section>
                    {
                    !currentUser
                    ? <></>
                    : currentUser.admin
                    && <SmallButton onClick={() => {
                        setShowEditModal(true);
                        setSelectedTour(tours[i]);
                        setEventNum(i + 1);
                        setValues(tours[i]);}}>
                        Edit
                    </SmallButton>
                    }
                    {
                        currentUser === null ? null
                        : currentUser.registeredTours.includes(tour._id) ? <SmallButton onClick={() => {playerRegistration(i); console.log(currentUser.registeredTours.includes(tour._id));}}>Unregister</SmallButton>
                        : logged && new Date(tour.eventStartDate) > new Date() && <SmallButton onClick={() => playerRegistration(i)}>Register</SmallButton>                    
                    }
                    </section>
                </td>
            </tr>
        )
    })
    return(
        tournaments
    )
}

export default TourSchedule;