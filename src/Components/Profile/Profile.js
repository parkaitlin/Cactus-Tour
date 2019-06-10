import React, {Component} from 'react';
import styled from 'styled-components';

import Footer from '../Footer/Footer';

const ProfilePage = styled.div`
    height: 100vh;
    .top-bgimg {
        background-image: url('imgs/profile.jpg');
        position: relative;
        opacity: 0.65;
        background-attachment: fixed;
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;
        height: 50vh;
    }
    .upcoming-tour {

    }
`

class PlayerProfile extends Component {
    state = {
        tours: []
    }
    getRegisteredTours = async()=>{
        try {
            const data = await this.props.user
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    componentDidMount(){
        getRegisteredTours()
    }

    render(){
        return(
            <ProfilePage>
                <div className='top-bgimg'>
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
                </div>
                <div className='upcoming-tour'>
                    <h2>Upcoming Tournaments</h2>
                   {/* a div with all past results */}
                </div>
                <div className='results'>
                    <h2>Results</h2>
                </div>
                <Footer />
            </ProfilePage>
        )
    }
}

export default PlayerProfile;