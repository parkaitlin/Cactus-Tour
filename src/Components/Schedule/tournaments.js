import React from 'react';
import {Link} from 'react-router-dom'
import * as routes from '../constants/routes';

const TourSchedule = (props)=>{
    const tournaments = props.tours.map(tour=>{
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
        const startDate = new Date(tour.eventStartDate)
        const EndDate = new Date(tour.eventEndDate)
        return(
            <tr className="tour-row" key={tour._id}>
                <td className='event'>
                    <div>{tour.eventId}</div>
                </td>
                <td className='date'>
                    <div>{months[startDate.getMonth()]}</div>
                    <div>{`${startDate.getDate() + 1} - ${EndDate.getDate() + 1}`}</div>
                </td>
                <td className='tour-info'>
                    <div>{tour.venue}</div>
                    <div>{`${tour.city}, ${tour.state}`}</div>
                </td>
                <td className='purse'>
                    <div>{`$${tour.purse}`}</div>
                </td>                                
                <td className='add-info'>
                    <div>First Start Time: {tour.startTime}</div>
                    <a href='#' name="showPlayerList" onClick={props.showModal}>View Registered Players</a>
                    <Link to={routes.LEADER}>View Leaderboard</Link>
                    <div>Note to Players: {tour.notes}</div>
                </td>
            </tr>
        )
    })
    return(
        tournaments
    )
}

export default TourSchedule;