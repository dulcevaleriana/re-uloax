import React, {useState} from "react";
import IMG_LOGO from '../assets/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Icon_fb from '../assets/img/icon/facebook-brands.svg';
import Icon_twitter from '../assets/img/icon/twitter-brands.svg';
import Icon_instagram from '../assets/img/icon/instagram-brands.svg';
import Icon_linkedin from '../assets/img/icon/linkedin-brands.svg';
import Icon_youtube from '../assets/img/icon/youtube-brands.svg';
import { TextField } from "@mui/material";

const Footer = (props: {
    function0: () => void,
    function1: () => void,
    function2: () => void,
    function3: () => void,
    function4: () => void,
}) => {
    const [emailNewsletter, setEmailNewsletter] = useState("");
    const [validForm, setValidForm] = useState(false);

    const validFormChange = () =>{
        alert("Thanks for be our new Newsletter :,)");
        setValidForm(false);
        setEmailNewsletter(" ");
    }

    return(
        <div className="class-Footer" id="lolo">
            <img src={IMG_LOGO} alt="IMG_LOGO" />
            <div>
                <h2>Address</h2>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as It is a long established fact that a reader will be distracted by the readable c
                </p>
            </div>
            <div>
                <h2>Links</h2>
                <ul>
                <li onClick={() => props.function0()}>
                    <a href="#Home">Home</a>
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
            </div>
            <div>
                <h2>Follow Us</h2>
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
                <h2>Newsletter</h2>
                <Box
                    component="form"
                    sx={{
                    '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <span>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <FontAwesomeIcon icon={faEnvelope} className=""/> 
                            <TextField 
                                error={(validForm && emailNewsletter === "") ? true : false}
                                onChange={(a)=>setEmailNewsletter(a.target.value)} 
                                value={emailNewsletter !== "" ? emailNewsletter : ""}
                                label="Enter your email" 
                                variant="standard" 
                                id="Enter-your-email"
                                helperText={(validForm && emailNewsletter === "") ? "You have to tell us your email" : false}
                            />
                        </Box>
                    </span>
                    <Button 
                        onClick={
                            (validForm && emailNewsletter !== "") ? 
                            (validFormChange) 
                            : 
                            (()=>setValidForm(true))
                        } 
                        variant="contained">
                            <FontAwesomeIcon icon={faThumbsUp} className="class-icono-rotate-and-flip"/> Subscribe
                    </Button>
                </Box>
            </div>
        </div>
    )
}

export default Footer;