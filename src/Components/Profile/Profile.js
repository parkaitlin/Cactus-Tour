import React, {Component} from 'react';
import styled from 'styled-components';

const ProfilePage = styled.div`

`

class PlayerProfile extends Component {
    state = {

    }
    render(){
        return(
            <ProfilePage>
                <div className='profile-header'>
                    <h1>Player Name</h1>
                    <h3>Player Hometown</h3>
                    <div className='player-info'>
                        <div className='joined'>
                            <p>Joined</p>
                            <p>year</p>
                        </div>
                        <div className="earnings">
                            <p>Career Earnings</p>
                            <p>$0</p>
                        </div>
                    </div>
                    <button>edit</button>
                </div>
                <div className='upcoming-tour'>
                    <h2>Upcoming Tournaments</h2>
                   {/* a div with all past results */}
                </div>
                <div className='results'>
                    <h2>Results</h2>
                </div>
            </ProfilePage>
        )
    }
}

export default PlayerProfile;