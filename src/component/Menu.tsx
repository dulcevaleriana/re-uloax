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
    
    const rolArray = [
        {
            rol: "home link",
            arialLabel: "click or enter to go to Re-Uloax principal page"
        },
        {
            rol: "logo Re-Uloax",
            arialLabel: "image logo Re-Uloax"
        },
        {
            rol: "navigator",
            arialLabel: "primary principal menu"
        },
        {
            rol: "home link",
            arialLabel: "click or enter to go to Re-Uloax principal page"
        },
        {
            rol: "Our Drivers link",
            arialLabel: "click or enter to go to Our Drivers"
        },
        {
            rol: "Ride With Us link",
            arialLabel: "click or enter to go to Ride With Us"
        },
        {
            rol: "App link",
            arialLabel: "click or enter to go to App Uloax"
        },
        {
            rol: "Contact Us link",
            arialLabel: "click or enter to go to Contact Us"
        },
        {
            rol: "SignIp link",
            arialLabel: "click or enter to go to SignIp"
        },
        {
            rol: "SignUp link",
            arialLabel: "click or enter to go to SignUp"
        }

    ]

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
            <Link to="/" onClick={() => setActiveMenu(false)} role={rolArray[0].rol} aria-label={rolArray[0].arialLabel}>
                <img src={IMG_LOGO} role={rolArray[1].rol} aria-label={rolArray[1].arialLabel} alt="IMG_LOGO" />
            </Link>
            {responsiveMenuWidth992px && (
                <>
                    {activeMenu === true ? (
                        <FontAwesomeIcon icon={faXmark} onClick={() => setActiveMenu(false)} role="close menu" aria-label="close responsive menu"/>
                    ) : (
                        <FontAwesomeIcon icon={faBars} onClick={() => setActiveMenu(true)} role="open menu" aria-label="open responsive menu"/>
                    )}
                </>
            )}
            <nav role={rolArray[2].rol} aria-label={rolArray[2].arialLabel}>
                <ul className={activeMenu === true ? "class-menu-smartphone" : " "}>
                    <li onClick={() => setActiveMenu(false)}>
                        <a href="#Home" role={rolArray[3].rol} aria-label={rolArray[3].arialLabel} >Home</a>
                    </li>
                    <li onClick={() => setActiveMenu(false)}>
                        <a href="#ourTaxiDrivers" role={rolArray[4].rol} aria-label={rolArray[4].arialLabel} >Our Drivers</a>
                    </li>
                    <li onClick={() => setActiveMenu(false)}>
                        <a href="#rideWithUs" role={rolArray[5].rol} aria-label={rolArray[5].arialLabel} >Ride With Us</a>
                    </li>
                    <li onClick={() => setActiveMenu(false)}>
                        <a href="#app" role={rolArray[6].rol} aria-label={rolArray[6].arialLabel}>App</a>
                    </li>
                    <li onClick={() => setActiveMenu(false)}>
                        <a href="#contactUs" role={rolArray[7].rol} aria-label={rolArray[7].arialLabel}>Contact Us</a>
                    </li>
                </ul>
            </nav>
            {activeMenu && (<div className="class-bg-menu-smartphone" onClick={() => setActiveMenu(false)}/>)}
            <div>
                <Link to="/SignIp" role={rolArray[8].rol} aria-label={rolArray[8].arialLabel}>
                    <Button variant="contained" role={rolArray[8].rol} aria-label={rolArray[8].arialLabel}>
                        <FontAwesomeIcon icon={faUser} /> {responsiveMenuWidth560px && "SignIp"}
                    </Button>
                </Link>
                <Link to="/SignUp" role={rolArray[9].rol} aria-label={rolArray[9].arialLabel}>
                    <Button variant="contained" role={rolArray[9].rol} aria-label={rolArray[9].arialLabel}>
                        <FontAwesomeIcon icon={faUserPlus} /> {responsiveMenuWidth560px && "SignUp"}
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Menu;