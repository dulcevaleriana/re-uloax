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

    const rolArray = [
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
            rol: "Uloax Facebook link",
            arialLabel: "click or enter to go to our Uloax Facebook"
        },
        {
            rol: "Uloax Twitter link",
            arialLabel: "click or enter to go to our Uloax Twitter"
        },
        {
            rol: "Uloax LinkedIn link",
            arialLabel: "click or enter to go to our Uloax LinkedIn"
        },
        {
            rol: "Uloax Youtube link",
            arialLabel: "click or enter to go to our Uloax Youtube"
        },
        {
            rol: "Uloax Instagram link",
            arialLabel: "click or enter to go to our Uloax Instagram"
        },
        {
            rol: "Form Re-Uloax Newsletter",
            arialLabel: "Primary"
        },
        {
            rol: "Input enter your email",
            arialLabel: "Secondary"
        },
        {
            rol: "Button Subscribe Uloax Newsletter",
            arialLabel: "Secondary"
        }
    ]

    const validFormChange = () =>{
        alert("Thanks for be our new Newsletter :,)");
        setValidForm(false);
        setEmailNewsletter(" ");
    }

    return(
        <div className="class-Footer" id="contactUs">
            <img src={IMG_LOGO} alt="IMG_LOGO" role={rolArray[0].rol} aria-label={rolArray[0].arialLabel}/>
            <div>
                <h2>Address</h2>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as It is a long established fact that a reader will be distracted by the readable c
                </p>
            </div>
            <nav role={rolArray[1].rol} aria-label={rolArray[1].arialLabel}>
                <h2>Links</h2>
                <ul>
                <li onClick={() => props.function0()}>
                    <a href="#Home" role={rolArray[2].rol} aria-label={rolArray[2].arialLabel}>Home</a>
                </li>
                <li onClick={() => props.function1()}>
                    <a href="#ourTaxiDrivers" role={rolArray[3].rol} aria-label={rolArray[3].arialLabel}>Our Drivers</a>
                </li>
                <li onClick={() => props.function2()}>
                    <a href="#rideWithUs" role={rolArray[4].rol} aria-label={rolArray[4].arialLabel}>Ride With Us</a>
                </li>
                <li onClick={() => props.function3()}>
                    <a href="#app" role={rolArray[5].rol} aria-label={rolArray[5].arialLabel}>App</a>
                </li>
                <li onClick={() => props.function4()}>
                    <a href="#contactUs" role={rolArray[6].rol} aria-label={rolArray[6].arialLabel}>Contact Us</a>
                </li>
            </ul>
            </nav>
            <div>
                <h2>Follow Us</h2>
                <ul>
                    <li>
                        <a href="#lolo" role={rolArray[7].rol} aria-label={rolArray[7].arialLabel}>
                            <img src={Icon_fb} alt="ICON" role={rolArray[7].rol} aria-label={rolArray[7].arialLabel}/> Facebook
                        </a>
                    </li>
                    <li>
                        <a href="#lolo" role={rolArray[8].rol} aria-label={rolArray[8].arialLabel}>
                            <img src={Icon_twitter} alt="ICON" role={rolArray[8].rol} aria-label={rolArray[8].arialLabel}/> Twitter
                        </a>
                    </li>
                    <li>
                        <a href="#lolo" role={rolArray[9].rol} aria-label={rolArray[9].arialLabel}>
                            <img src={Icon_linkedin} alt="ICON" role={rolArray[9].rol} aria-label={rolArray[9].arialLabel}/> LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="#lolo" role={rolArray[10].rol} aria-label={rolArray[10].arialLabel}>
                            <img src={Icon_youtube} alt="ICON" role={rolArray[10].rol} aria-label={rolArray[10].arialLabel}/> Youtube
                        </a>
                    </li>
                    <li>
                        <a href="#lolo" role={rolArray[11].rol} aria-label={rolArray[11].arialLabel}>
                            <img src={Icon_instagram} alt="ICON" role={rolArray[11].rol} aria-label={rolArray[11].arialLabel}/> Instagram
                        </a>
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
                    role={rolArray[12].rol} 
                    aria-label={rolArray[12].arialLabel}
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
                                role={rolArray[13].rol} 
                                aria-label={rolArray[13].arialLabel}
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
                        variant="contained"
                        role={rolArray[14].rol} 
                        aria-label={rolArray[14].arialLabel}
                    >
                            <FontAwesomeIcon icon={faThumbsUp} className="class-icono-rotate-and-flip"/> Subscribe
                    </Button>
                </Box>
            </div>
        </div>
    )
}

export default Footer;