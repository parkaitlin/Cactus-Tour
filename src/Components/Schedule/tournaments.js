import React from 'react';
import {Link} from 'react-router-dom'
import * as routes from '../constants/routes';

const handleTime = (start)=>{
    const time = start;
    const timeArray = time.split(':');
    const hour = parseInt(timeArray[0]);

    if(hour === 0){
        return `12:${timeArray[1]} AM`
    } else if(hour === 12){
        return `${time} PM`
    } else if(hour > 12){
        return `${hour - 12}:${timeArray[1]} PM`
    } else {
        return `${hour}:${timeArray[1]} AM`
    }
}
const handleMonth = (date)=>{
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const monthNum = new Date(date).getMonth()
    return months[monthNum]
}

const handleDate = (date)=>{
    const dateNum = new Date(date).getDate()
    return dateNum + 1
}
const TourSchedule = (props)=>{
    const tournaments = props.tours.map((tour, i)=>{
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
                        <a href='#' name="showPlayerList" onClick={props.showModal}>View Registered Players</a><br/>
                        <Link to={routes.LEADER}>View Leaderboard</Link>
                        <div>Note to Players: {tour.notes}</div>
                    </div>
                    <div className="tour-edit-btns">
                        <button name='showEditModal' onClick={(e)=>props.showModal(e, i)}>Edit</button>
                    </div>
                </td>
            </tr>
        )
    })
    return(
        tournaments
    )
}

export default TourSchedule;