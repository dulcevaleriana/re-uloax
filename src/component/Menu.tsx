import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import IMG_LOGO from '../assets/img/logo.png';
import {Helmet} from "react-helmet";

const Menu = (props: {
    countView: number,
    function0: () => void,
    function1: () => void,
    function2: () => void,
    function3: () => void,
    function4: () => void,
}) => {
    let countView = props.countView;
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
            <Link to="/" onClick={() => props.function0()}>
                <img src={IMG_LOGO} alt="IMG_LOGO" />
            </Link>
            <ul>
                <li onClick={() => props.function0()}>
                    <Link to="/">Home</Link>
                </li>
                <li onClick={() => props.function1()}>
                    <a href="#ourTaxiDrivers">Our Drivers</a>
                </li>
                <li onClick={() => props.function2()}>
                    <a href="#rideWithUs">Ride With Us</a>
                </li>
                <li onClick={() => props.function3()}>
                    <a href="#app">App</a>
                </li>
                <li onClick={() => props.function4()}>
                    <a href="#contactUs">Contact Us</a>
                </li>
            </ul>
        
            <div>
                <Link to="/SignIp">
                    <Button variant="contained">
                        <FontAwesomeIcon icon={faUser} /> SignIp
                    </Button>
                </Link>
                <Link to="/SignUp">
                    <Button variant="contained">
                        <FontAwesomeIcon icon={faUserPlus} /> SignUp
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Menu;