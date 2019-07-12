import React from 'react';
import {Link} from 'react-router-dom';
import * as routes from '../constants/routes';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { HomePage } from '../../styles/HomePage';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Home = ()=>{
  return(
    <HomePage>
      <div className='bgimg-1'>
        <div className='title-box'>
          <div className='cactus-tour'>
              <span>WELCOME TO THE CACTUS TOUR</span>
          </div>
          <p>The Tour for Women Golf Professionals on the West Coast</p>
          </div>
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className="arrow" 
          />
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