import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import IMG_LOGO from '../assets/img/logo.png';

const Menu = () => {
    return(
        <div className="class-Menu">
            <Link to="/">
                <img src={IMG_LOGO} alt="IMG_LOGO" />
            </Link>
        
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="#lolo">Our Drivers</a>
                </li>
                <li>
                    <a href="#lolo">Ride With Us</a>
                </li>
                <li>
                    <a href="#lolo">App</a>
                </li>
                <li>
                    <a href="#lolo">Contact Us</a>
                </li>
            </ul>
        
            <div>
                <Link to="/SingIp">
                    <Button variant="contained">
                        <FontAwesomeIcon icon={faUser} /> SingIp
                    </Button>
                </Link>
                <Link to="/SingUp">
                    <Button variant="contained">
                        <FontAwesomeIcon icon={faUserPlus} /> SingUp
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Menu;