import React, {Component} from 'react';
import styled from 'styled-components';

import Footer from '../Footer/Footer';
import AllStates from '../Membership/states';
import Tournaments from './tournaments';
// font-family: 'Maven Pro', sans-serif;
// font-family: 'Open Sans', sans-serif;

const ScheduleTable = styled.div`
    min-height: 64vh;
    padding: 50px 60px;
    border-left: 100px solid rgb(230, 233, 235);
    border-right: 100px solid rgb(230, 233, 235);

    h2 {
        font-family: 'Maven Pro', sans-serif;
    }
    .entire-table {
        border: 2px solid #777;
    }
    .table {
        width: 100%;
        background-color: rgb(230, 233, 235);
    }
    /* header row */
    .head-row {
        height: 50px;
        background-color: #1e204b;
    }
    th {
        border: 2px solid #1e204b;
        color: #ffffff;
        font-family: 'Maven Pro', sans-serif;
    }
    /* tournament rows */
    .tour-row {
        background-color: #ffffff;
    }
    td > div {
        color: #1e204b;
        font-family: 'Open Sans', sans-serif;
    }
    .event, .date, .purse {
        text-align: center;
    }
    .add-info {
        padding: 5px 8px;
    }
    label {
        font-size: 13px
    }
    input {
        font-size: 13px;
        border-radius: 5px;
        margin: 6px 3px;
        text-align: center;
    }
    .event > input {
        width: 40px;
        text-align: inherit;
    }
    .tour-info-input {
        padding: 10px;
    }
    .city-input {
        width: 120px;
    }
    .state-input {
        width: 45px;
    }
    .purse > input {
        width: 80px;
    }
    .add-tour-btn {
        font-size: 20px;
        border-radius: 4px;
        width: 200px;
        font-family: 'Open Sans', sans-serif;        
    }
`

class Schedule extends Component{
    state = {
        eventId: 0,
        eventStartDate: new Date(),
        eventEndDate: new Date(),
        venue: '',
        city: '',
        state: '',
        purse: '',
        startTime: '',
        notes: '',
        tours: []
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleDate = (e)=>{
        const date = new Date(e.target.value)
        console.log(date)
        this.setState({
            [e.target.name]: date
        })
    }
    handleTime = (e)=>{
        const time = e.target.value;
        const timeArray = time.split(':');
        const hour = parseInt(timeArray[0]);
        console.log(hour)

        if(hour === 0){
            this.setState({
                [e.target.name]: `12:${timeArray[1]} AM`
            })
        } else if(hour === 12){
            this.setState({
                [e.target.name]: `${time} PM`
            }) 
        } else if(hour > 12){
            this.setState({
                [e.target.name]: `${hour - 12}:${timeArray[1]} PM`
            })
        } else {
            this.setState({
                [e.target.name]: `${time} AM`
            })
        }
    }
    addTour = async()=>{
        try {
            const data = await fetch('/tour/new', {
                method: "POST",
                credentials: "include",
                body: JSON.stringify(this.state),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedData = await data.json()
            console.log(parsedData)
        } catch (error) {
            console.log(error)
        }
    }
    getTours = async()=>{
        try {
            const data = await fetch('/tour/all', {
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedData = await data.json();
            console.log(parsedData)
        } catch (error) {
            console.log(error)
        }
    }
    componentDidMount(){
        this.getTours().then(data=>{
            this.setState({
                tours: data
            })
        })
    }
    render(){
        const {eventId, eventStartDate, eventEndDate, venue, city, state, purse, notes, tours} = this.state
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

        return(
            <>
                <ScheduleTable>
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
                                        <input type='number' name='eventId' value={eventId} onChange={this.handleChange} />
                                    </td>
                                    <td className='date'>
                                        <label>Start Date: </label>
                                        <input type='date' name='eventStartDate' onChange={this.handleDate} /><br/>
                                        <label>End Date: </label>                                        
                                        <input type='date' name='eventEndDate' onChange={this.handleDate} />

                                        <div>{months[eventStartDate.getMonth()]}</div>
                                        <div>{`${eventStartDate.getDate() + 1} - ${eventEndDate.getDate() + 1}`}</div>
                                    </td>
                                    <td className='tour-info-input'>
                                        <label>Venue:</label>
                                        <input type='text' name='venue' value={venue} onChange={this.handleChange} /><br/>
                                        <label>City:</label>                                        
                                        <input className='city-input' type='text' name='city' value={city} onChange={this.handleChange} />
                                        <label>State:</label>                                        
                                        <input className='state-input' list='states' name='state' value={state} onChange={this.handleChange} />
                                            <AllStates />
                                    </td>
                                    <td className='purse'>
                                        <label>$</label> <input type='text' name='purse' placeholder='ex) 9,000' value={purse} onChange={this.handleChange} /><br/>
                                    </td>                                
                                    <td className='add-info'>
                                        <label>First Start Time: </label>
                                        <input type='time' name='startTime' onChange={this.handleTime} /><br/>
                                        <label>Player Notes: </label><br/>
                                        <input type='text' name='notes' value={notes} onChange={this.handleTime} /><br/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button className='add-tour-btn' onClick={this.addTour}>ADD TOURNAMENT</button>
                    <h2>2019 Schedule</h2>
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
                                        <div>1</div>
                                    </td>
                                    <td className='date'>
                                        <div>JUNE</div>
                                        <div>21 - 23</div>
                                    </td>
                                    <td className='tour-info'>
                                        <div>some golf course</div>
                                        <div>Phoenix, AZ</div>
                                    </td>
                                    <td className='purse'>
                                        <div>$9,000</div>
                                    </td>                                
                                    <td className='add-info'>
                                        <div>First Start Time:</div>
                                        <div>View Registered Players</div>
                                        <div>View Leaderboard</div>
                                        <div>notes</div>
                                    </td>
                                </tr>
                                <Tournaments tours={tours}/>
                            </tbody>
                        </table>
                    </div>
                </ScheduleTable>
                <Footer />
            </>
        )
    }
}

export default Schedule;