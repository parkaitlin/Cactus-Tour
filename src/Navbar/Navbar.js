import React from 'react';
import {NavLink} from 'react-router-dom';

import * as routes from '../constants/routes';

const Navbar = (props)=>
    <div className="navbar-bar">
        <div className="navbar-links">
        <NavLink to={routes.HOME} className="navbar-link">Home</NavLink>
        <NavLink to={routes.LOGIN} className="navbar-link">Login</NavLink>
        <NavLink to={routes.MEMBER} className="navbar-link">Membership Information</NavLink>
        <NavLink to={routes.SCHEDULE} className="navbar-link">Schedule</NavLink>
        <NavLink to={routes.MLIST} className="navbar-link">Money List</NavLink>
        <NavLink to={routes.PAST} className="navbar-link">Past Results</NavLink>
        <NavLink to={routes.POLICY} className="navbar-link">Policies</NavLink>
        <NavLink to={routes.CONTACT} className="navbar-link">Contact Us</NavLink>
        <NavLink to={routes.ABOUT} className="navbar-link">About</NavLink>
        </div>
    </div>

export default Navbar;