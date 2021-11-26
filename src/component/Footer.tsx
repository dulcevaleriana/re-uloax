import React from "react";
import IMG_LOGO from '../assets/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Icon_fb from '../assets/img/icon/facebook-brands.svg';
import Icon_twitter from '../assets/img/icon/twitter-brands.svg';
import Icon_instagram from '../assets/img/icon/instagram-brands.svg';
import Icon_linkedin from '../assets/img/icon/linkedin-brands.svg';
import Icon_youtube from '../assets/img/icon/youtube-brands.svg';

const Footer = () => {
    return(
        <div className="class-Footer" id="lolo">
            <img src={IMG_LOGO} alt="IMG_LOGO" />
            <div>
                <h1>Address</h1>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as It is a long established fact that a reader will be distracted by the readable c
                </p>
            </div>
            <div>
                <h1>Links</h1>
                <ul>
                <li>
                    <a href="#lolo">Home</a>
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
            </div>
            <div>
                <h1>Follow Us</h1>
                <ul>
                    <li>
                        <a href="#lolo"><img src={Icon_fb} alt="ICON"/> Facebook</a>
                    </li>
                    <li>
                        <a href="#lolo"><img src={Icon_twitter} alt="ICON"/> Twitter</a>
                    </li>
                    <li>
                        <a href="#lolo"><img src={Icon_linkedin} alt="ICON"/> LinkedIn</a>
                    </li>
                    <li>
                        <a href="#lolo"><img src={Icon_youtube} alt="ICON"/> Youtube</a>
                    </li>
                    <li>
                        <a href="#lolo"><img src={Icon_instagram} alt="ICON"/> Instagram</a>
                    </li>
                </ul>
            </div>
            <div>
                <h1>Newsletter</h1>
                <Box
                    component="form"
                    sx={{
                    '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <span>
                        <span className="class-cicle"/>
                        <Input placeholder="Enter your email" />
                    </span>
                    <Button variant="contained">
                        <FontAwesomeIcon icon={faThumbsUp} className="class-icono-rotate-and-flip"/> Subscribe
                    </Button>
                </Box>
            </div>
        </div>
    )
}

export default Footer;