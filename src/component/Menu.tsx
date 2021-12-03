import React,{useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import useMediaQuery from '../js/useMediaQuery';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import IMG_LOGO from '../assets/img/logo.png';
import {Helmet} from "react-helmet";

const Menu = (props: {
    countView: number
}) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const responsiveMenuWidth992px = useMediaQuery("(max-width: 992px)");
    const responsiveMenuWidth560px = useMediaQuery("(min-width: 560px)");
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
            <Link to="/" onClick={() => setActiveMenu(false)}>
                <img src={IMG_LOGO} alt="IMG_LOGO" />
            </Link>
            {responsiveMenuWidth992px && (
                <>
                    {activeMenu === true ? (
                        <FontAwesomeIcon icon={faXmark} onClick={() => setActiveMenu(false)}/>
                    ) : (
                        <FontAwesomeIcon icon={faBars} onClick={() => setActiveMenu(true)}/>
                    )}
                </>
            )}
            <ul className={activeMenu === true ? "class-menu-smartphone" : " "}>
                <li onClick={() => setActiveMenu(false)}>
                    <a href="#Home">Home</a>
                </li>
                <li onClick={() => setActiveMenu(false)}>
                    <a href="#ourTaxiDrivers">Our Drivers</a>
                </li>
                <li onClick={() => setActiveMenu(false)}>
                    <a href="#rideWithUs">Ride With Us</a>
                </li>
                <li onClick={() => setActiveMenu(false)}>
                    <a href="#app">App</a>
                </li>
                <li onClick={() => setActiveMenu(false)}>
                    <a href="#contactUs">Contact Us</a>
                </li>
            </ul>
            {activeMenu && (<div className="class-bg-menu-smartphone" onClick={() => setActiveMenu(false)}/>)}
            <div>
                <Link to="/SignIp">
                    <Button variant="contained">
                        <FontAwesomeIcon icon={faUser} /> {responsiveMenuWidth560px && "SignIp"}
                    </Button>
                </Link>
                <Link to="/SignUp">
                    <Button variant="contained">
                        <FontAwesomeIcon icon={faUserPlus} /> {responsiveMenuWidth560px && "SignUp"}
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Menu;