import React from 'react';
import {Link} from 'react-router-dom'
import * as routes from '../constants/routes';

const TourSchedule = (props)=>{
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const tournaments = props.tours.map(tour=>{
        return(
            <tr className="tour-row" key={tour._id}>
                <td className='event'>
                    <div>{tour.eventId}</div>
                </td>
                <td className='date'>
                    <div>{months[tour.eventStartDate.getMonth()]}</div>
                    <div>{`${tour.eventStartDate.getDate() + 1} - ${tour.eventEndDate.getDate() + 1}`}</div>
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
                    <Link to={routes.PLIST} onClick={}>View Registered Players</Link>
                    <Link to={routes.LEADER} onClick={}>View Leaderboard</Link>
                    <div>Note to Players: {tour.notes}</div>
                </td>
            </tr>
        )
    })
    return(
        tournaments
    )
}