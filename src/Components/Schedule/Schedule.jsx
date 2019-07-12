import React from 'react';
import AllStates from '../Membership/states';
import Tournaments from './tournaments';
import Modal from './modal';
import { ScheduleTable } from '../../styles/SchedulePage';


export default class Schedule extends React.Component {
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
        selectedTour: [],
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
            const parsedData = data.json()
            this.updateTours();
            return parsedData
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
            const parsedData = data.json()
            this.updateTours();
            return parsedData
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
            const parsedData = data.json()
            this.updateTours()
            return parsedData
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
            return parsedData
        } catch (error) {
            console.log(error)
        }
    }
    componentDidMount(){
        this.getTours().then((data)=>{
            this.setState({
                tours: data.tours,
                eventId: data.tours.length + 1,
            })
        })
    }
    updateTours = ()=>{
        this.getTours().then((data)=>{
            this.setState({
                eventId: data.tours.length + 1,
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
    eventRegistration = async(e, index)=>{
        await this.setState({
            selectedTour: this.state.tours[index]
        })
        const {user} = this.props
        let registered = false

        for(let i = 0; i < user.registeredTours.length - 1; i++){
            if(this.state.selectedTour.registeredPlayers.length === 0 || user.registeredTours.length === 0){
                registered = false
            } else if(this.state.selectedTour.registeredPlayers[i]._id === user._id){
                registered = true
                console.log('You are already registered for the selected tournament')
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
            this.updateTours()
            this.props.updateCurrentUser(parsedData.user)
            } catch (error) {
            console.log(error)
            } 
        }
    }
    render(){
        const {eventId, eventStartDate, eventEndDate, venue, city, state, purse, startTime, notes, status, tours, showPlayerList, showEditModal, eventNum, selectedTour} = this.state
        const {user, logged} = this.props
        return(
            <>
            <ScheduleTable>
                    {
                        !user
                        ? <></>
                        : user.admin 
                        && <><div className='entire-table'>
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
                        <button className='add-tour-btn' onClick={this.addTour}>Add Tournament</button></>
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
                                <Tournaments tours={tours} showModal={this.showModal} user={user} eventRegistration={this.eventRegistration} logged={logged} />
                            </tbody>
                        </table>
                    </div>
            </ScheduleTable>
            <Modal show={showPlayerList}>
                <button name="showPlayerList" className="exit-btn" onClick={this.hideModal}>X</button>
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
                                && selectedTour.registeredPlayers.map((player, i)=>{
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
                <button name="showEditModal" className="exit-btn" onClick={this.hideModal}>X</button>
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
                    {status && <button className='cancel-btn' onClick={this.cancelEvent}>Cancel Event</button>}
            </Modal>
            </>
        )
    }
}
