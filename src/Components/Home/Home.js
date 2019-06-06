import React from 'react';
import styled from 'styled-components';

import Footer from '../Footer/Footer';

const HomePage = styled.div`
    height: 100vh;
    .bgimg-1 {
        background-image: url('imgs/christoph-von-gellhorn-748872-unsplash.jpg');
        position: relative;
        opacity: 0.65;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 80vh
    }

    .cactus-story {
        background-color: white;
        padding: 50px 80px;
    }
    .cactus-story > h3, .cactus-story > h5 {
        text-align: center;
        color: black;
        margin: 15px;
    }
    .cactus-story > p {
        text-align: justify;
        color: #777
    }
`

const Home = (props)=>{
    return(
        <HomePage>
            <div className='bgimg-1'>
                <div className='cactus-tour'>
                    <span>THE CACTUS TOUR</span>
                </div>
            </div>
            <div className="cactus-story">
                <h3>Our Story</h3>
                <h5>Phoenix, Arizona</h5>
                <p>In 2005 the Cactus Tour was created for professional women golfers as a place to play outside of the LPGA and The Symetra Tour. Over the last 14 years it has evolved into not only a venue to improve your game but as a place to prepare for events during the off-season for all professional and highly skilled amateur women golfers. The tour now draws women golf professionals from all major world tours to those first year professionals, as well as amateurs that want to test their skills against the best. These women golfers come from all over the world and vary in age as well as skill level. <br/><br/>
                The value of The Cactus Tour is in having localized events for those just starting professional careers, coming off of injuries, not having status on major tours or just wanting to work on their games for upcoming events or qualifying schools without having the added expense of traveling all over the country. Our events are highly competitive, run professionally, and held on quality courses in Phoenix, Las Vegas, California, and Texas. The events are cost effective and provide a payout to 50% of the pro field which is the best percentage in the country.</p>
            </div>
            <Footer />
        </HomePage>
    )
}

export default Home;