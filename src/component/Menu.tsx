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
    countView: number,
    function0: () => void,
    function1: () => void,
    function2: () => void,
    function3: () => void,
    function4: () => void
}) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const responsiveMenuWidth992px = useMediaQuery("(max-width: 992px)");
    const responsiveMenuWidth560px = useMediaQuery("(min-width: 560px)");
    let countView = props.countView;

    const rolArray = [
        {
            rol: "link",
            arialLabel: "click or enter to go to Re-Uloax principal page"
        },
        {
            rol: "img",
            arialLabel: "image logo Re-Uloax"
        },
        {
            rol: "navigation",
            arialLabel: "primary principal menu"
        },
        {
            rol: "link",
            arialLabel: "Home"
        },
        {
            rol: "link",
            arialLabel: "Our Drivers"
        },
        {
            rol: "link",
            arialLabel: "Ride With Us"
        },
        {
            rol: "link",
            arialLabel: "App"
        },
        {
            rol: "link",
            arialLabel: "Contact Us"
        },
        {
            rol: "link",
            arialLabel: "click or enter to go to SignIp"
        },
        {
            rol: "link",
            arialLabel: "click or enter to go to SignUp"
        },
        {
            rol: "link",
            arialLabel: "close responsive menu"
        },
        {
            rol: "link",
            arialLabel: "open responsive menu"
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
            <Link to="/" onClick={() => setActiveMenu(false)} role={rolArray[0].rol} aria-labelledby={rolArray[0].arialLabel}>
                <img src={IMG_LOGO} role={rolArray[1].rol} aria-label={rolArray[1].arialLabel} alt="IMG_LOGO" />
            </Link>
            {responsiveMenuWidth992px && (
                <>
                    {activeMenu === true ? (
                        <FontAwesomeIcon icon={faXmark} onClick={() => setActiveMenu(false)} role={rolArray[9].rol} aria-label={rolArray[9].arialLabel}/>
                    ) : (
                        <FontAwesomeIcon icon={faBars} onClick={() => setActiveMenu(true)} role={rolArray[9].rol} aria-label={rolArray[9].arialLabel}/>
                    )}
                </>
            )}
            <nav role={rolArray[2].rol} aria-labelledby={rolArray[2].arialLabel}>
                <ul className={activeMenu === true ? "class-menu-smartphone" : " "}>
                    <li onClick={() => {setActiveMenu(false);props.function0()}}>
                        <a href="#Home" role={rolArray[3].rol} aria-label={rolArray[3].arialLabel}>
                            {rolArray[3].arialLabel}
                        </a>
                    </li>
                    <li onClick={() => {setActiveMenu(false);props.function1()}}>
                        <a href="#ourTaxiDrivers" role={rolArray[4].rol} aria-label={rolArray[4].arialLabel}>
                            {rolArray[4].arialLabel}
                        </a>
                    </li>
                    <li onClick={() => {setActiveMenu(false);props.function2()}}>
                        <a href="#rideWithUs" role={rolArray[5].rol} aria-label={rolArray[5].arialLabel}>
                            {rolArray[5].arialLabel}
                        </a>
                    </li>
                    <li onClick={() => {setActiveMenu(false);props.function3()}}>
                        <a href="#app" role={rolArray[6].rol} aria-label={rolArray[6].arialLabel}>
                            {rolArray[6].arialLabel}
                        </a>
                    </li>
                    <li onClick={() => {setActiveMenu(false);props.function4()}}>
                        <a href="#contactUs" role={rolArray[7].rol} aria-label={rolArray[7].arialLabel}>
                            {rolArray[7].arialLabel}
                        </a>
                    </li>
                </ul>
            </nav>
            {activeMenu && (<div className="class-bg-menu-smartphone" onClick={() => setActiveMenu(false)}/>)}
            <div role={rolArray[8].rol + " " + rolArray[9].rol} aria-labelledby={rolArray[8].arialLabel + " " + rolArray[9].arialLabel}>
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