import React from 'react';
import {NavLink} from 'react-router-dom';
import * as routes from '../constants/routes';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSun} from '@fortawesome/free-regular-svg-icons';
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';


// font-family: 'Maven Pro', sans-serif;
// font-family: 'Open Sans', sans-serif;

const Bar = styled.div`
    background-color: rgb(230, 233, 235);
    height: 18vh;
    display: flex;
    padding: 15px;

    .left-col, .right-col{
        flex: 0.5;
        display: flex;
    } 
    .right-col {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
    }
    /* .login-link {
        align-self: flex-end;
    } */
    .left-col > img {
        height: 13vh;
        width: auto;
        align-self: center;
    }
    .navbar-links {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        flex: 1;
    }

    .row-one, .row-two {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .navbar-link {
        color: #777;
        text-decoration: none;
        margin: 5px 8px;
        font-family: 'Open Sans', sans-serif;

    }
    .sun-logo {
        color: #777;
        height: 5vh;
        width: auto;
        margin-bottom: 10px;
        animation: rotate 2.5s;
        animation-iteration-count: 2;
    }
    .sm-logo {
        color: #777;
        height: 5vh;
        width: auto;
        margin: 5px;
    }
    @keyframes rotate {
        0%, 100% {
            -webkit-transform: rotate(60deg);
            transform: rotate(60deg);
        }
        50% {
            -webkit-transform: rotate(-60deg);
            transform: rotate(-60deg);
        }
    }
`


const Navbar = (props)=>
    <Bar>
        <div className="left-col">
            <img src="imgs/cactuslogo2.gif" alt="The Cactus Tour"></img>
        </div>
        <div className="navbar-links">
            <FontAwesomeIcon icon={faSun} className="sun-logo" />
            <div className="row-one">
                <NavLink to={routes.HOME} className="navbar-link">Home</NavLink>
                <NavLink to={routes.MEMBER} className="navbar-link" onClick={props.showNewUserForm}>Membership Information</NavLink>
                <NavLink to={routes.SCHEDULE} className="navbar-link">Schedule</NavLink>
            </div>
            <div className="row-two">
                <a href="http://thecactustour.com/money/19MoneyList.pdf" className="navbar-link">Money List</a>
                <NavLink to={routes.PAST} className="navbar-link">Past Results</NavLink>
                <NavLink to={routes.POLICY} className="navbar-link">Policies</NavLink>
                <NavLink to={routes.CONTACT} className="navbar-link">Contact Us</NavLink>
                <NavLink to={routes.ABOUT} className="navbar-link">About</NavLink>
            </div>
        </div>
        <div className="right-col">
            <div className="sm-links">
                <a href="https://www.facebook.com/The-Cactus-Tour-83099767055/"><FontAwesomeIcon icon={faFacebookSquare} className="sm-logo" /></a>
                <a href="https://twitter.com/thecactustour"><FontAwesomeIcon icon={faTwitterSquare} className="sm-logo" /></a>            
            </div>
            {
                props.logged
                ? <div className="profile-logout">
                    <NavLink to={routes.PROFILE} className="navbar-link">Profile</NavLink>
                    <NavLink to={routes.HOME} className="navbar-link" onClick={props.logout}>Logout</NavLink>
                </div> 
                : <NavLink to={routes.MEMBER} className="navbar-link login-link" onClick={props.showLogin}>Login</NavLink>
            }
        </div>
    </Bar>

export default Navbar;