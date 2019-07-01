import React from 'react';
import {Link} from 'react-router-dom';
import * as routes from '../constants/routes';
import styled from 'styled-components';

import Footer from '../Footer/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

// font-family: 'Maven Pro', sans-serif;
// font-family: 'Open Sans', sans-serif;
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
        height: 76vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .bgimg-2 {
        background-image: url('imgs/homepic2.jpg');
        position: relative;
        opacity: 0.65;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 80vh;
        padding: 120px 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .bgimg-3 {
        background-image: url('imgs/christoph-von-gellhorn-748872-unsplash.jpg');
        position: relative;
        opacity: 0.65;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 60vh;
    }
    
    .title-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 71vh;
    
    }
    
    .cactus-tour {
        color: white;
        background-color: rgba(0, 0, 0, 0.5);
        font-size: 30px;
        width: 50vw;
        height: 10vh;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Maven Pro', sans-serif;
    }
    .title-box > p {
        color: white;
        margin: 20px 0;
        font-family: 'Open Sans', sans-serif;
    }

    .cactus-story {
        background-color: white;
        padding: 50px 80px;
    }
    .cactus-story > h3, .cactus-story > h5 {
        text-align: center;
        color: black;
        margin: 0 15px 15px 15px;
        font-family: 'Maven Pro', sans-serif;
    }
    .cactus-story > p {
        text-align: justify;
        color: #777;
        font-family: 'Open Sans', sans-serif;
    }

    .membership-info, .schedule-link {
        width: 30vw;
        height: 20vh;
        border: 2px solid white;
        background-color: rgb(255, 255, 255);
        color: #777;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding: 18px;
        text-align: center;
    }
    .bg2-btn {
        font-size: 20px;
        width: 10vw;
        border-radius: 4px;
    }

    .sponsors {
        height: 50vh;
        margin: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Maven Pro', sans-serif;
        color: #777;
    }
    .row-1 > img {
        margin: 10px;
    }
    .row-2 > img {
        margin: 15px;
    }
    .row-1, .row-2 {
        margin: 10px;
    }
    .princeton {
        border: 10px solid black;
    }
    .arrow {
        color: white;
        font-size: 30px;
        animation: fadeInDown 2s;
        animation-iteration-count: infinite;
    }
    @keyframes fadeInDown {
        0%, 100% {
            opacity: 0.5;
            -webkit-transform: translate3d(0, -70%, 0);
            transform: translate3d(0, -75%, 0);
        }
        50% {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

`

const Home = (props)=>{
    return(
        <HomePage>
            <div className='bgimg-1'>
                <div className='title-box'>
                    <div className='cactus-tour'>
                        <span>WELCOME TO THE CACTUS TOUR</span>
                    </div>
                    <p>The Tour for Women Golf Professionals on the West Coast</p>
                </div>
                 <FontAwesomeIcon icon={faChevronDown} className="arrow" />
            </div>
            <div className="cactus-story">
                <h3>OUR STORY</h3>
                <h5>Phoenix, Arizona</h5>
                <p>In 2005 the Cactus Tour was created for professional women golfers as a place to play outside of the LPGA and The Symetra Tour. Over the last 14 years it has evolved into not only a venue to improve your game but as a place to prepare for events during the off-season for all professional and highly skilled amateur women golfers. The tour now draws women golf professionals from all major world tours to those first year professionals, as well as amateurs that want to test their skills against the best. These women golfers come from all over the world and vary in age as well as skill level. <br/><br/>
                The value of The Cactus Tour is in having localized events for those just starting professional careers, coming off of injuries, not having status on major tours or just wanting to work on their games for upcoming events or qualifying schools without having the added expense of traveling all over the country. Our events are highly competitive, run professionally, and held on quality courses in Phoenix, Las Vegas, California, and Texas. The events are cost effective and provide a payout to 50% of the pro field which is the best percentage in the country.</p>
            </div>
            <div className='bgimg-2'>
                <div className="membership-info" data-aos="fade-up" data-aos-duration="2000">
                    <h2>Membership Info</h2>
                    <Link to={routes.MEMBER}><button className="bg2-btn">HERE</button></Link>
                </div>
                <div className="schedule-link" data-aos="fade-up" data-aos-duration="2000">
                    <h2>Check Out The Tournament Schedule</h2>
                    <Link to={routes.SCHEDULE}><button className="bg2-btn">2019</button></Link>
                </div>
            </div>
            <div className='sponsors'>
                <h2>OUR SPONSORS & SUPPORTERS</h2>
                <div className="row-1">
                    <img src='imgs/sponsor2.jpg' alt='Players Towel' />
                    <img src='imgs/sponsor3.jpg' alt='Golf4Her' />
                    <img src='imgs/sponsor10.jpg' alt='SuperSpeed Golf' />
                    <img src='imgs/sponsor6.png' alt='ASHER' />
                    <img src='imgs/sponsor7.jpg' alt='Creative Awards' />
                    <img src='imgs/sponsor4.jpg' alt='Quick N Clean' />
                </div>
                <div className="row-2">
                    <img src='imgs/sponsor5.jpg' alt='Arizona Sports Clinic' />
                    <img src='imgs/sponsor1.jpg' alt='1 Swing Golf' />
                    <img src='imgs/sponsor8.jpg' alt='Princeton Club' className='princeton'/>
                    <img src='imgs/sponsor9.jpg' alt='REVO' />
                    <img src='imgs/sponsor11.png' alt='TopGolf' />
                </div>
            </div>
            <div className='bgimg-3'>
            </div>
            
            <Footer />
        </HomePage>
    )
}

export default Home;