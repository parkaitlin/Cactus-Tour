import React from 'react';
import {NavLink} from 'react-router-dom';
import * as routes from '../constants/routes';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSun} from '@fortawesome/free-regular-svg-icons'

const Bar = styled.div`
    background-color: rgb(230, 233, 235);
    height: 18vh;
    display: flex;

    .left-col, .right-col{
        flex: 0.5;
        display: flex;
    } 
    .left-col > img {
        height: 13vh;
        width: auto;
        align-self: center;
        margin: 10px;
    }
    .navbar-links {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        flex: 1;
        margin: 10px;
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
    }
    .sun-logo {
        color: #777;
        height: 5vh;
        width: auto;
        margin-bottom: 10px;
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
                <NavLink to={routes.MEMBER} className="navbar-link">Membership Information</NavLink>
                <NavLink to={routes.SCHEDULE} className="navbar-link">Schedule</NavLink>
            </div>
            <div className="row-two">
                <NavLink to={routes.MLIST} className="navbar-link">Money List</NavLink>
                <NavLink to={routes.PAST} className="navbar-link">Past Results</NavLink>
                <NavLink to={routes.POLICY} className="navbar-link">Policies</NavLink>
                <NavLink to={routes.CONTACT} className="navbar-link">Contact Us</NavLink>
                <NavLink to={routes.ABOUT} className="navbar-link">About</NavLink>
            </div>
        </div>
        <div className="right-col">
            <NavLink to={routes.LOGIN} className="navbar-link">Login</NavLink>        
        </div>
    </Bar>

export default Navbar;