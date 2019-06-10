import React, {Component} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Footer from '../Footer/Footer';
import AllStates from '../Membership/states';
import Tournaments from './tournaments';
import Modal from './modal';
import { async } from 'q';
// font-family: 'Maven Pro', sans-serif;
// font-family: 'Open Sans', sans-serif;

const ScheduleTable = styled.div`
    min-height: 82vh;
    width: 100vw;
    /* padding: 50px 60px;
    border-left: 100px solid rgb(230, 233, 235);
    border-right: 100px solid rgb(230, 233, 235); */
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    z-index: -1;
    padding-top: 50px;
    
    h2 {
        font-family: 'Maven Pro', sans-serif;
    }
    .entire-table {
        border: 2px solid #777;
        background-attachment: fixed;
    }
    .table {
        width: 85vw;
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
        display: flex;
        justify-content: space-between
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
    .tour-info {
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
    .tour-edit-btns {
        align-self: flex-end;

    }
    .notes-red {
        color: red
    }
`

class Schedule extends Component{
    state = {
        eventId: 0,
        eventStartDate: '',
        eventEndDate: '',
        venue: '',
        city: '',
        state: '',
        purse: '',
        startTime: '',
        notes: '',
        status: true,
        tours: [],
        showPlayerList: false,
        showEditModal: false,
        selectedTour: {},
        eventNum: 0
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleActivate = (e)=>{
        this.setState({
            [e.target.name]: e.target.value,
            notes: ''
        })
    }
    editEvent = async ()=>{
        try {
            const data = await fetch(`/tour/${this.state.selectedTour._id}`, {
                method: "PUT",
                credentials: "include",
                body: JSON.stringify(this.state),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedData = await data.json();
            console.log(parsedData);
            this.updateTours();
        } catch (error) {
            console.log(error)
        }
    }
    cancelEvent = async ()=>{
        await this.setState({
            status: false,
            notes: "CANCELLED"
        })
        try {
            const data = await fetch(`/tour/${this.state.selectedTour._id}`, {
                method: "PUT",
                credentials: "include",
                body: JSON.stringify({status: this.state.status, notes: this.state.notes}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedData = await data.json();
            console.log(parsedData);
            this.updateTours();

        } catch (error) {
            console.log(error)
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
            this.updateTours()
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
            return parsedData
        } catch (error) {
            console.log(error)
        }
    }
    componentDidMount(){
        this.getTours().then((data)=>{
            this.setState({
                tours: data.tours,
                eventId: data.tours.length + 1
            })
        })
    }
    updateTours = ()=>{
        this.getTours().then((data)=>{
            this.setState({
                eventId: 0,
                eventStartDate: '',
                eventEndDate: '',
                venue: '',
                city: '',
                state: '',
                purse: '',
                startTime: '',
                notes: '',
                status: true,
                tours: data.tours,
                showPlayerList: false,
                showEditModal: false,
                selectedTour: {},
                eventNum: 0
            })
        })
    }
    showModal = (e, index)=>{
        const {eventStartDate, eventEndDate, venue, city, state, purse, startTime, notes, status} = this.state.tours[index]
        this.setState({
            [e.target.name]: true,
            selectedTour: this.state.tours[index],
            eventNum: index + 1,
            eventStartDate: eventStartDate,
            eventEndDate: eventEndDate,
            venue: venue,
            city: city,
            state: state,
            purse: purse,
            startTime: startTime,
            notes: notes,
            status: status
        })
    }
    hideModal = (e)=>{
        this.setState({
            [e.target.name]: false
        })
    }
    render(){
        const {eventId, eventStartDate, eventEndDate, venue, city, state, purse, startTime, notes, status, tours, showPlayerList, showEditModal, eventNum} = this.state

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
                                            <input type='number' name='eventId' value={eventId} onChange={this.handleChange} readOnly/>
                                        </td>
                                        <td className='date'>
                                            <label>Start Date: </label>
                                            <input type='date' name='eventStartDate' onChange={this.handleChange} /><br/>
                                            <label>End Date: </label>                                        
                                            <input type='date' name='eventEndDate' onChange={this.handleChange} />
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
                                        <td className='new-add-info'>
                                            <label>First Start Time: </label>
                                            <input type='time' name='startTime' onChange={this.handleChange} /><br/>
                                            <label>Player Notes: </label><br/>
                                            <input type='text' name='notes' value={notes} onChange={this.handleChange} /><br/>
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
                                            <div>
                                                <div>First Start Time:</div>
                                                <div>View Registered Players</div>
                                                <div>View Leaderboard</div>
                                                <div>notes</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <Tournaments tours={tours} showModal={this.showModal}/>
                                </tbody>
                            </table>
                        </div>
                </ScheduleTable>
                <Modal show={showPlayerList}>
                    <button name="showPlayerList" onClick={this.hideModal}>X</button>
                    <h1>Registered Players</h1>
                    <div className='player-table'>
                        <table className='table'>
                            <thead className="table-head">
                                <tr className= "head-row">
                                    <th>Player</th>
                                    <th>Hometown</th>
                                </tr>
                            </thead>
                        </table>
                    </div>    
                </Modal>
                <Modal show={showEditModal}>
                    <button name="showEditModal" onClick={this.hideModal}>X</button>
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
                                            <input type='date' name='eventStartDate' value={eventStartDate} onChange={this.handleChange} /><br/>
                                            <label>End Date: </label>                                        
                                            <input type='date' name='eventEndDate' value={eventEndDate} onChange={this.handleChange} />
                                        </td>
                                        <td className='tour-info'>
                                            <label>Venue:</label>
                                            <input type='text' name='venue' value={venue} onChange={this.handleChange} /><br/>
                                            <label>City:</label>                                        
                                            <input className='city-input' type='text' name='city' value={city} onChange={this.handleChange} />
                                            <label>State:</label>                                        
                                            <input className='state-input' list='states' name='state' value={state} onChange={this.handleChange} />
                                                <AllStates />
                                        </td>
                                        <td className='purse'>
                                            <label>$</label> <input type='text' name='purse' value={purse} onChange={this.handleChange} /><br/>
                                        </td>                                
                                        <td className='add-info'>
                                            <div>
                                                <label>First Start Time: </label>
                                                <input type='time' name='startTime' value={startTime} onChange={this.handleChange} /><br/>
                                                <label>Player Notes: </label><br/>
                                                <input type='text' name='notes' value={notes} onChange={this.handleChange} /><br/>
                                                {!status && <label>Set Event Status to Active</label>}                                                
                                                {!status && <input type='checkbox' name='status' value={true} onChange={this.handleActivate} />}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button onClick={this.editEvent}>Save Changes</button>
                        {status && <button onClick={this.cancelEvent}>Cancel Event</button>}
                </Modal>
                {/* <Footer /> */}
            </>
        )
    }
}

export default Schedule;