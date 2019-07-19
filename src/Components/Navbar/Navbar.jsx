import React from 'react';
import {NavLink} from 'react-router-dom';
import * as routes from '../constants/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSun} from '@fortawesome/free-regular-svg-icons';
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { Bar } from '../../styles/Bar';

const Navbar = ({logged, setExistingUser, setCurrentUser, setLogged, message})=>
    <Bar>
        <div className="left-col">
            <NavLink 
                to={routes.HOME} 
                className="navbar-link">
                <img 
                    src="imgs/cactuslogo2.gif" 
                    alt="The Cactus Tour">
                </img>
            </NavLink>
        </div>

        <div className="navbar-links">
            <FontAwesomeIcon 
                icon={faSun} 
                className="sun-logo" 
            />
            <div className="row">
                <NavLink 
                    to={routes.MEMBER} 
                    className="navbar-link" 
                    onClick={() => setExistingUser(false)}>
                    Membership Information
                </NavLink>
                <NavLink 
                    to={routes.SCHEDULE} 
                    className="navbar-link">
                    Schedule
                </NavLink>
                <a 
                    href="http://thecactustour.com/money/19MoneyList.pdf" 
                    className="navbar-link">
                    Money List
                </a>
                {/* <NavLink 
                    to={routes.PAST} 
                    className="navbar-link">
                    Past Results
                </NavLink> */}
                <NavLink 
                    to={routes.POLICY} 
                    className="navbar-link">
                    Policies
                </NavLink>
                <NavLink 
                    to={routes.CONTACT} 
                    className="navbar-link">
                    Contact Us
                </NavLink>
                {/* <NavLink 
                    to={routes.ABOUT} 
                    className="navbar-link">
                    About
                </NavLink> */}
            </div>
        </div>

        <div className="right-col">
            <div className="sm-links">
                <a href="https://www.facebook.com/The-Cactus-Tour-83099767055/">
                    <FontAwesomeIcon 
                        icon={faFacebookSquare} 
                        className="sm-logo" 
                    />
                </a>
                <a href="https://twitter.com/thecactustour">
                    <FontAwesomeIcon 
                        icon={faTwitterSquare} 
                        className="sm-logo" 
                    />
                </a>            
            </div>
            {
                logged
                ? <div className="profile-logout">
                    <NavLink 
                        to={routes.PROFILE} 
                        className="navbar-link">
                        Profile
                    </NavLink>
                    <NavLink 
                        to={routes.HOME} 
                        className="navbar-link" 
                        onClick={() => {
                            setLogged(false); 
                            setCurrentUser(null);
                            sessionStorage.clear();}}>
                        Logout
                    </NavLink>
                </div> 
                : <NavLink 
                    to={routes.MEMBER} 
                    className="navbar-link login-link" 
                    onClick={() => setExistingUser(true)}>
                    Player Portal
                </NavLink>
            }
        </div>
    </Bar>

export default Navbar;