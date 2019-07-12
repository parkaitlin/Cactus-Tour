import React from 'react';
import { handleDate, handleMonth, handleTime } from '../timeAndDate';

const UpcomingTours = (props)=>{
    const tournaments = props.upcomingTours.map((tour, i)=>{
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
                        <button name="showPlayerList" onClick={(e)=>props.showModal(e, i)}>View Registered Players</button><br/>
                        {/* <Link to={routes.LEADER}>View Leaderboard</Link> */}
                        <div>Note to Players: <span className="notes-red">{tour.notes}</span></div>
                    </div>                 
                </td>
            </tr>
        )
    })
    return(
        tournaments
    )
}

export default UpcomingTours;