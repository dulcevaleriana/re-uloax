import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import IMG_LOGO from '../assets/img/logo.png';
import {Helmet} from "react-helmet";

const Menu = () => {
    const [countView, setCountView] = useState(0);
    return(
        <div className="class-Menu">
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    {
                        countView === 0 ? "Uloax || Taxi Driver Service" :
                        countView === 1 ? "Our Taxi Drivers || Uloax" :
                        countView === 2 ? "Why Ride With Uloax || Uloax" :
                        countView === 3 ? "Our App || Uloax" :
                        countView === 4 && "Contact Us || Uloax"
                    }
                </title>
            </Helmet>
            <Link to="/">
                <img src={IMG_LOGO} alt="IMG_LOGO" />
            </Link>
            <ul>
                <li onClick={() => {setCountView(0)}}>
                    <Link to="/">Home</Link>
                </li>
                <li onClick={() => {setCountView(1)}}>
                    <a href="#ourTaxiDrivers">Our Drivers</a>
                </li>
                <li onClick={() => {setCountView(2)}}>
                    <a href="#rideWithUs">Ride With Us</a>
                </li>
                <li onClick={() => {setCountView(3)}}>
                    <a href="#app">App</a>
                </li>
                <li onClick={() => {setCountView(4)}}>
                    <a href="#contactUs">Contact Us</a>
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